
export interface ResidenteApiD {

  crearResidente: (residente: Omit<ResidenteCreateModelI, "id_residente">) =>
    Promise<SendResponseI<null> | SendResponseI<string>>;

  actualizarResidente: (residente: ResidenteCreateModelI) =>
    Promise<SendResponseI<string> | SendResponseI<null>>;

  getResidenteByFiltro: (payload: PaginationAllI) =>
    Promise<SendResponseI<null> | SendResponseI<PaginationResidenteModelI>>;

  residentesByApt: (id_apt: number) => Promise<SendResponseI<ResidenteModelI[]>>;

  estadoResidente: (id: number,) =>
    Promise<SendResponseI<string> | SendResponseI<null>>;

  residentesExcel: () =>
    Promise<Buffer | SendResponseI<string>>;
}
