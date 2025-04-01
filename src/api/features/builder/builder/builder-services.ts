import { LimiteSchema } from "../schemas/limite-schema";
import { prisma } from "../../../utils/prisma";
import { SendResponse } from "../../../utils/sendResponse";
import { validateErrorCatch } from "../../../utils/validateError";
import { idSchema } from "../../../schemas/id-schema";
import type { Builder } from "@prisma/client"

export const createBuilderUniqueService = async () => {
  try {
    const countTorre = await prisma.builder.count();

    await prisma.builder.create({
      data: {
        name: `${countTorre + 1}`,
        stateId: 1,
      },
    });

    return new SendResponse<string>(
      "success",
      200,
      "Torre creada",
      "Torre creada",
    );
  } catch (error) {
    return validateErrorCatch(error);
  }
};

export const createBuilderMultipleService = async (payload: MultipleModelI) => {
  try {
    const validateLimite = LimiteSchema.parse(payload);
    const { inicio, limite } = validateLimite;

    const torres = Array.from({ length: limite - inicio + 1 }, (_, i) => ({
      name: `${inicio + i}`,
      stateId: 1
    }));

    await prisma.builder.createMany({
      data: torres,
    });

    return new SendResponse<string>(
      "success",
      200,
      "Torres creadas",
      "Torres creadas",
    );
  } catch (error) {
    return validateErrorCatch(error);
  }
};

export const getAllBuilderService = async () => {
  try {
    const builderName = await prisma.configuration.findMany({
      select: {
        builderType: true
      }
    })

    const torres = await prisma.builder.findMany({
      select: {
        id: true,
        name: true,
        state: {
          select: {
            state: true
          }
        }
      }
    });

    const builderList = await Promise.all(torres.map(async (torre) => {
      const totalApartments = await prisma.apartament.count({
        where: {
          builderId: torre.id,
        },
      });
      return {
        id: torre.id,
        name: `${builderName[0]?.builderType ?? "Torre"}-${torre.name}`,
        totalApartments,
        state: torre.state.state,
      };
    }));

    return new SendResponse(
      "success",
      200,
      "torres obtenidos",
      builderList,
    );
  } catch (error) {
    return validateErrorCatch(error);
  }
};

export const deleteBuilderService = async (id: number) => {
  try {
    const id_builder = idSchema.parse(id);

    const apts = await prisma.apartament.count({
      where: {
        builderId: Number(id_builder),
      },
    });

    if (apts > 0) {
      return new SendResponse<string>(
        "error",
        404,
        "No se puede eliminar con apts",
        "No se puede eliminar con apts",
      );
    }

    await prisma.builder.delete({
      where: {
        id: Number(id_builder),
      },
    });

    return new SendResponse<string>(
      "success",
      200,
      "Torre eliminada",
      "Torre eliminada",
    );
  } catch (error) {
    return validateErrorCatch(error);
  }
};

export const builderByIdService = async (id: number) => {
  try {
    const id_builder = idSchema.parse(id);

    const builderById = await prisma.builder.findUnique({
      where: {
        id: Number(id_builder),
      },
    });

    const nameBuilder = await prisma.configuration.findUnique({
      where: {
        id: 1
      },
      select: {
        builderType: true
      }
    })

    if (!builderById || !nameBuilder) {
      return new SendResponse<string>(
        "error",
        404,
        "No se encontró el builder",
        "No se encontró el builder"
      );
    }

    const data: Builder = {
      ...builderById,
      name: `${nameBuilder.builderType}-${builderById.name}`
    }

    return new SendResponse<Builder>(
      "success",
      200,
      "Torres",
      data
    );
  } catch (error) {
    return validateErrorCatch(error);
  }
};

export const changeStateBuilderService = async (id: number) => {
  try {
    const id_builder = idSchema.parse(id);

    const builder = await prisma.builder.findUnique({
      select: {
        stateId: true,
        state: {
          select: {
            state: true,
          },
        },
      },
      where: {
        id: id_builder,
      },
    });

    if (!builder) {
      return new SendResponse<string>(
        "error",
        404,
        "No se encontró el builder",
        "No se encontró el builder"
      );
    }

    const newState = await prisma.state.findFirst({
      where: {
        state: builder.state.state === "Activo" ? "Inactivo" : "Activo",
      },
      select: {
        id: true,
      },
    });

    if (!newState) {
      return new SendResponse<string>(
        "error",
        500,
        "No se encontró el estado correspondiente",
        "No se encontró el estado correspondiente"
      );
    }

    await prisma.builder.update({
      data: {
        stateId: newState.id,
      },
      where: {
        id: id_builder,
      },
    });

    return new SendResponse<string>(
      "success",
      200,
      "Estado actualizado",
      "Estado actualizado"
    );
  } catch (error) {
    return validateErrorCatch(error);
  }
};
