import type { Visitante } from "@prisma/client";

export interface VisitanteApiD {
  crearVisitante: (visitante: Omit<Visitante, "id_Visitante">) => Promise<
    SendResponseI<null> | SendResponseI<string>>;

  actualizarVisitante: (
    visitante: Visitante,
  ) => Promise<
    SendResponseI<string> | SendResponseI<null>>;

  getImage: (nameImage: string) => Promise<SendResponseI<string> | SendResponseI<null>>;

  getVisitanteByCedula: (
    cedula: string,
  ) => Promise<
    SendResponseI<string> | SendResponseI<null> | SendResponseI<Visitante>>;

}
