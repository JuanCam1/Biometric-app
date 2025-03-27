import { prisma } from "../../utils/prisma";
import { namesSettingsSchema, themeSchema } from "./setting.schema";
import { SendResponse } from "../../utils/sendResponse";
import { validateErrorCatch } from "../../utils/validateError";

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

export const changeNamesSettingsService = async (payload: Omit<SettingOptionsI, "theme" | "maxVehiclesPerResident">) => {
  try {
    const validateNamesSettings = namesSettingsSchema.parse(payload);
    const { id, builderType, aptType } = validateNamesSettings;

    const settings = await prisma.configuration.findUnique({
      select: {
        id: true,
        builderType: true,
        aptType: true,
      },
      where: {
        id: Number(id)
      }
    });


    if (settings && (settings.builderType !== builderType || settings.aptType !== aptType)) {
      await prisma.configuration.update({
        where: {
          id: Number(settings.id),
        },
        data: {
          builderType,
          aptType,
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

export const getSettingsOptionsService = async () => {
  try {
    const settings = await prisma.configuration.findUnique({
      select: {
        id: true,
        theme: true,
        builderType: true,
        aptType: true,
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