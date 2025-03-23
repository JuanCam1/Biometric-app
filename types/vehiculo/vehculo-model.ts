export interface VehiculoModel {
  id_vehiculo: string;
  placa_vehiculo: string;
  descripcion_vehiculo?: string;
  tipo_vehiculo: TipoVehiculoModel;
}

export interface TipoVehiculoModel {
  id_tipo_vehiculo: number;
  tipo_vehiculo: string;
}
