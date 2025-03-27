import type { FunctionComponent, SVGProps } from "react";
import type { GetAll } from "./pagination.model";
import type { SendResponse } from "./response.model";
import type { GetAllBuilder } from "./builder/builder-interface"
import type { MultipleModel } from "./multiple-interface";
import type { SettingOptions } from "./setting/setting-interface";

// import type { RoleModel } from "./usuarios/role-model";
// import type { UsuarioModel } from "./usuarios/usuario-model";
// import type { PaginationResidentesResponse, ResidenteCreateModel, ResidenteModel } from "./residentes/residente-model";
// import type { VisitaModel, getVisitasByTorreFecha } from "./visita/visita-model";
// import type { VehiculoModel, TipoVehiculoModel } from "./vehiculo/vehculo-model";
// import type { TorreModel, ApartamentoModel } from "./apartamento/apartamento-interface"

declare global {
  interface RoleModelI extends RoleModel { }
  interface SendResponseI<T> extends SendResponse<T> { }
  interface PaginationAllI extends GetAll { }
  interface MultipleModelI extends MultipleModel { }
  interface ThemeI extends Theme { }

  interface GetAllBuilderModelI extends GetAllBuilder { }

  interface SettingOptionsI extends SettingOptions { }



  // interface ResidenteModelI extends ResidenteModel { }
  // interface ResidenteCreateModelI extends ResidenteCreateModel { }
  // interface PaginationResidenteModelI extends PaginationResidentesResponse { }

  // interface UsuarioModelI extends UsuarioModel { }


  // interface MultipleAptModelI extends MultipleModel {
  //   id_torre: number;
  // }

  // interface VisitaModelI extends VisitaModel { }
  // interface getVisitasByTorreFechaI extends getVisitasByTorreFecha { }

  // interface VehiculoModelI extends VehiculoModel { }
  // interface TipoVehiculoModelI extends TipoVehiculoModel { }

  // interface ApartamentoModelI extends ApartamentoModel { }
}

export { };