import { ipcRenderer } from "electron";

export const BuilderApi = {

  createBuilderUnique: async (): Promise<
    SendResponseI<string> | SendResponseI<null>
  > => ipcRenderer.invoke("createBuilderUnique"),

  createBuilderMultiple: async (
    payload: MultipleModelI,
  ): Promise<
    SendResponseI<string> | SendResponseI<null>
  > => ipcRenderer.invoke("createBuilderMultiple", payload),

  getAllBuilder: async (): Promise<
    SendResponseI<null> | SendResponseI<GetAllBuilderModelI[]>
  > => ipcRenderer.invoke("getAllBuilder"),

  deleteBuilder: async (
    id_torre: number,
  ): Promise<
    SendResponseI<string> | SendResponseI<null>
  > => ipcRenderer.invoke("deleteBuilder", id_torre),

  changeStateBuilder: async (
    id_torre: number,
  ): Promise<
    SendResponseI<string> | SendResponseI<null>
  > => ipcRenderer.invoke("changeStateBuilder", id_torre),




};
