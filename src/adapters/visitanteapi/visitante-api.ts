import { ipcRenderer } from "electron";
import type { Visitante } from "@prisma/client";

export const visitanteApi = {
  crearVisitante: async (visitante: Omit<Visitante, "id_Visitante">): Promise<
    SendResponseI<null> | SendResponseI<string>
  > => ipcRenderer.invoke("crear-visitante", visitante),

  actualizarVisitante: async (
    visitante: Visitante
  ): Promise<
    SendResponseI<string> | SendResponseI<null>
  > => ipcRenderer.invoke("actualizar-visitante", visitante),

  getImage: async (nameImage: string): Promise<SendResponseI<string> | SendResponseI<null>> =>
    ipcRenderer.invoke("get-image", nameImage),

  getVisitanteByCedula: async (
    cedula: string
  ): Promise<
    SendResponseI<string> | SendResponseI<null> | SendResponseI<Visitante>
  > => ipcRenderer.invoke("visitante-by-cedula", cedula),
};
