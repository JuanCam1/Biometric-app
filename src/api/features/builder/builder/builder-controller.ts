import { changeStateBuilderService, createBuilderMultipleService, createBuilderUniqueService, deleteBuilderService, getAllBuilderService } from "./builder-services";

export const createBuilderUnique = async () => {
  return await createBuilderUniqueService();
};

export const createBuilderMultiple = async (
  _: unknown,
  payload: MultipleModelI,
) => {
  return await createBuilderMultipleService(payload);
};

export const getAllBuilder = async () => {
  return await getAllBuilderService();
};

export const deleteBuilder = async (_: unknown, id_torre: number) => {
  return await deleteBuilderService(id_torre);
};

export const changeStateBuilder = async (_: unknown, id_torre: number) => {
  return await changeStateBuilderService(id_torre);
};
