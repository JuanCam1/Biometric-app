import type { SettingApiD } from "@/adapters/settings/setting-d-model";
import type { BuilderApiD } from "../src/adapters/builder/builder-d-model";
// import type { UsuarioApiD } from "./usuarioapi/usario-d-api";
// import type { VisitanteApiD } from "./visitanteapi/visitante-d-api";
// import type { ResidenteApiD } from "./residenteapi/residente-d-api";
// import type { VehiculoApiD } from "./vehiculoapi/vehiculo-d-api";


interface Api extends BuilderApiD, SettingApiD { }
declare global {
  interface Window {
    api: Api
  }
}

