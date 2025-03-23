export interface VisitaModel {
  fechaEntrada: string;
  horaEntrada: string;
  id_visitante: string;
  id_autoriza: string;
  tipo_vehiculo?: string;
  placa_vehiculo: string;
  id_tipo_vehiculo: string;
  descripcion_vehiculo: string;
  observacion: string;
  id_apartamento: string;
  id_torre: string;
  mensajero_visitante: string;
  tipo_mensajero: string;
}

export interface getVisitasByTorreFecha {
  page: number;
  pageSize: number;
  id_apartamento: string;
  fecha_inicio: string;
  fecha_fin: string;
}