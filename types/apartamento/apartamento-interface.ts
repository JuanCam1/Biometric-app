export interface ApartamentoModel {
  id_apartamento: number;
  nombre_apartamento: string;
  torre: TorreModel;
}

export interface TorreModel {
  id_torre: number;
  nombre_torre: string;
}
