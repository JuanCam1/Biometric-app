import { prisma } from "../../utils/prisma";
import { companySettingsSchema, namesSettingsSchema, themeSchema } from "./setting.schema";
import { SendResponse } from "../../utils/sendResponse";
import { validateErrorCatch } from "../../utils/validateError";
import { capitalizeText } from "../../utils/capitalizar";
import { imagesFolderPath } from "../../utils/pathImages";
import { getImage } from "../../utils/getImage";
import fs from "node:fs";
import path from "node:path";

export const changeThemeService = async (payload: Pick<SettingOptionsI, "id" | "theme">) => {
  try {
    const themeSettings = themeSchema.parse(payload);
    const { id, theme: themePage } = themeSettings;

    const settings = await prisma.configuration.findUnique({
      select: {
        id: true,
        theme: true,
      },
      where: {
        id: Number(id)
      }
    });

    if (settings && settings.theme !== themePage) {
      await prisma.configuration.update({
        where: {
          id: Number(settings.id),
        },
        data: {
          theme: themePage,
        },
      });

    }
    return new SendResponse<string>(
      "success",
      200,
      "Configuración guardada",
      "Configuración guardada",
    );


  } catch (error) {
    return validateErrorCatch(error);
  }
};

export const changeNamesSettingsService = async (payload: Omit<SettingOptionsI, "theme">) => {
  try {
    const validateNamesSettings = namesSettingsSchema.parse(payload);
    const { id, builderType, aptType, maxVehiclesPerResident } = validateNamesSettings;

    const settings = await prisma.configuration.findUnique({
      select: {
        id: true,
        builderType: true,
        aptType: true,
        maxVehiclesPerResident: true
      },
      where: {
        id: Number(id)
      }
    });

    const dataCapitalize = {
      builderType: capitalizeText(builderType),
      aptType: capitalizeText(aptType),
      maxVehiclesPerResident
    }


    if (settings && ((settings.builderType !== builderType || settings.aptType !== aptType) || settings.maxVehiclesPerResident !== maxVehiclesPerResident)) {
      await prisma.configuration.update({
        where: {
          id: Number(settings.id),
        },
        data: dataCapitalize
      });

    }
    return new SendResponse<string>(
      "success",
      200,
      "Configuración guardada",
      "Configuración guardada",
    );
  } catch (error) {
    return validateErrorCatch(error);
  }
};

export const getSettingsOptionsService = async () => {
  try {
    const settings = await prisma.configuration.findUnique({
      select: {
        id: true,
        theme: true,
        builderType: true,
        aptType: true,
        maxVehiclesPerResident: true,
      },
      where: {
        id: 1
      }
    });

    if (!settings) {
      return new SendResponse<string>(
        "error",
        404,
        "No se encontró la configuración",
        "No se encontró la configuración"
      );
    }

    return new SendResponse<SettingOptionsI>(
      "success",
      200,
      "Configuración obtenida",
      settings,
    );
  } catch (error) {
    return validateErrorCatch(error);
  }
};


export const getDataCompanyService = async () => {
  try {
    const company = await prisma.company.findUnique({
      select: {
        id: true,
        name: true,
        address: true,
        phone: true,
        email: true,
        logo: true,
        website: true,
        city: true,
        description: true,
        nit: true,
        postalCode: true,
        randomId: true,
      },
      where: {
        id: 1
      }
    });

    if (!company) {
      return new SendResponse<string>(
        "error",
        404,
        "No se encontró la información",
        "No se encontró la información"
      );
    }

    let base64Logo = null;
    if (company.randomId) {
      const base64GetImage = getImage(company.logo);

      base64Logo = base64GetImage !== null ? base64GetImage : null;
    }

    const companyData = {
      ...company,
      randomId: company.randomId,
      logo: base64Logo
    }

    return new SendResponse<CompanyDataI>(
      "success",
      200,
      "Configuración obtenida",
      companyData,
    );
  } catch (error) {
    return validateErrorCatch(error);
  }
}

export const updateDataCompanyService = async (payload: SettingsCompanyI) => {
  try {
    const validateNamesSettings = companySettingsSchema.parse(payload);
    const companyData = validateNamesSettings;

    if (!fs.existsSync(imagesFolderPath)) {
      fs.mkdirSync(imagesFolderPath);
    }

    const namePhoto = `${companyData.randomId}.png`;
    const filePath = path.join(imagesFolderPath, namePhoto);

    const base64Data = companyData.logo.replace(/^data:image\/\w+;base64,/, "");
    fs.writeFileSync(filePath, base64Data, "base64");

    const dataCapitalize: SettingsCompanyI = {
      id: Number(companyData.id),
      name: capitalizeText(companyData.name),
      address: companyData.address === "Sin dirección" ? companyData.address : capitalizeText(companyData.address),
      description: companyData.description === "Sin descripción" ? companyData.description : capitalizeText(companyData.description),
      logo: namePhoto,
      city: companyData.city === "Bucaramanga" ? companyData.city : capitalizeText(companyData.city),
      phone: companyData.phone === "Sin teléfono" ? companyData.phone : capitalizeText(companyData.phone),
      email: companyData.email === "Sin email" ? companyData.email : capitalizeText(companyData.email),
      website: companyData.website === "Sin web" ? companyData.website : capitalizeText(companyData.website),
      nit: companyData.nit === "Sin NIT" ? companyData.nit : capitalizeText(companyData.nit),
      postalCode: companyData.postalCode,
      randomId: companyData.randomId
    }

    await prisma.company.update({
      where: {
        id: Number(companyData.id),
      },
      data: dataCapitalize
    });

    return new SendResponse<string>(
      "success",
      200,
      "Configuración guardada",
      "Configuración guardada",
    );
  } catch (error) {
    return validateErrorCatch(error);
  }
};