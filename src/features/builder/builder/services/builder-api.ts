

export const getAllBuilder = async () => {
  return await window.api.getAllBuilder();
};

export const getByIdBuilder = async (id: number) => {
  return await window.api.builderById(id);
}