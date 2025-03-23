import type { Vehiculo, TipoVehiculo } from "@prisma/client";

export interface VehiculoApiD {
  crearVehiculos: (vehiculo: Omit<Vehiculo, "id_vehiculo">) => Promise<
    SendResponseI<null> | SendResponseI<string>
  >;

  actualizarVehiculo: (
    vehiculo: Vehiculo,
  ) => Promise<
    SendResponseI<string> | SendResponseI<null>
  >;

  getVehiculos: () => Promise<SendResponseI<string> | SendResponseI<Vehiculo[]>>;

  eliminarVehiculo: (
    id: number,
  ) => Promise<
    SendResponseI<string> | SendResponseI<null>
  >;

  getTipoVehiculos: () => Promise<
    | SendResponseI<TipoVehiculo[]>
  >;

  crearTipoVehiculo: (tipo: Omit<TipoVehiculo, "id_tipo_vehiculo">) => Promise<
    | SendResponseI<null>
    | SendResponseI<string>
  >;
}
