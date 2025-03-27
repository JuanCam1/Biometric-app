import { changeStateBuilderService, createBuilderMultipleService, createBuilderUniqueService, deleteBuilderService, getAllBuilderService } from "./builder-services";

export const createBuilderUniqueController = async () => {
  return await createBuilderUniqueService();
};

export const createBuilderMultipleController = async (
  _: unknown,
  payload: MultipleModelI,
) => {
  return await createBuilderMultipleService(payload);
};

export const getAllBuilderController = async () => {
  return await getAllBuilderService();
};

export const deleteBuilderController = async (_: unknown, id_torre: number) => {
  return await deleteBuilderService(id_torre);
};

export const changeStateBuilderController = async (_: unknown, id_torre: number) => {
  return await changeStateBuilderService(id_torre);
};
