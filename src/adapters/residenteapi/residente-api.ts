import { ipcRenderer } from "electron";

export const residenteApi = {

  crearResidente: async (residente: Omit<ResidenteCreateModelI, "id_residente">): Promise<
    SendResponseI<null> | SendResponseI<string>
  > => ipcRenderer.invoke("crear-residente", residente),

  actualizarResidente: async (
    residente: ResidenteCreateModelI
  ): Promise<
    SendResponseI<string> | SendResponseI<null>
  > => ipcRenderer.invoke("actualizar-residente", residente),

  getResidenteByFiltro: async (payload: PaginationAllI):
    Promise<SendResponseI<null> | SendResponseI<PaginationResidenteModelI>> =>
    ipcRenderer.invoke("get-filtro-residente", payload),

  residentesByApt: async (id_apt: number): Promise<SendResponseI<ResidenteModelI[]>> =>
    ipcRenderer.invoke("get-residentes-by-apt", id_apt),

  estadoResidente: async (
    id: number,
  ): Promise<
    SendResponseI<string> | SendResponseI<null>
  > => ipcRenderer.invoke("cambio-estado-residente", id),

  residentesExcel: async ():
    Promise<Buffer | SendResponseI<string>
    > => ipcRenderer.invoke("informe-residentes"),
};
