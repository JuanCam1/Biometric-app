
import { contextBridge, ipcRenderer } from "electron";
import { BuilderApi } from "./adapters/builder/builder-model";
import { SettingApi } from "./adapters/settings/setting-model";

// import { usuarioApi } from "./adapters/usuarioapi/usuario-api";
// import { visitanteApi } from "./adapters/visitaapi/visita-api";
// import { residenteApi } from "./adapters/residenteapi/residente-api";
// import { vehiculoAPi } from "./adapters/vehiculoapi/vehiculo-api";

const api = {
  ...SettingApi,
  ...BuilderApi,
  // ...usuarioApi,
  // ...visitanteApi,
  // ...residenteApi,
  // ...vehiculoAPi,
};


contextBridge.exposeInMainWorld("api", api);
