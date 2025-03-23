import { ipcRenderer } from "electron";
import type { TipoVehiculo, Vehiculo } from "@prisma/client";

export const vehiculoAPi = {
  crearVehiculos: async (vehiculo: Omit<Vehiculo, "id_vehiculo">): Promise<
    SendResponseI<null> | SendResponseI<string>
  > => ipcRenderer.invoke("crear-vehiculo", vehiculo),

  actualizarVehiculo: async (
    vehiculo: Vehiculo,
  ): Promise<
    SendResponseI<string> | SendResponseI<null>
  > => ipcRenderer.invoke("get-vehiculos", vehiculo),

  getVehiculos: async (): Promise<SendResponseI<string> | SendResponseI<Vehiculo[]>> =>
    ipcRenderer.invoke("get-vehiculos"),

  eliminarVehiculo: async (
    id: number,
  ): Promise<
    SendResponseI<string> | SendResponseI<null>
  > => ipcRenderer.invoke("eliminar-vehiculo", id),

  getTipoVehiculos: async (): Promise<SendResponseI<TipoVehiculo[]>
  > => ipcRenderer.invoke("get-tipo-vehiculos"),

  crearTipoVehiculo: async (tipo: Omit<TipoVehiculo, "id_tipo_vehiculo">): Promise<
    | SendResponseI<null>
    | SendResponseI<string>
  > => ipcRenderer.invoke("crear-tipo-vehiculo", tipo),
};
