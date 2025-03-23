
import { contextBridge, ipcRenderer } from "electron";
import { BuilderApi } from "./adapters/builder/builder-model";

// import { usuarioApi } from "./adapters/usuarioapi/usuario-api";
// import { visitanteApi } from "./adapters/visitaapi/visita-api";
// import { residenteApi } from "./adapters/residenteapi/residente-api";
// import { vehiculoAPi } from "./adapters/vehiculoapi/vehiculo-api";

const api = {
  // ...usuarioApi,
  ...BuilderApi,
  // ...visitanteApi,
  // ...residenteApi,
  // ...vehiculoAPi,
  quit: () => ipcRenderer.send("quit"),
  minimize: () => ipcRenderer.send("minimize"),
  maximize: () => ipcRenderer.send("maximize"),
};


contextBridge.exposeInMainWorld("api", api);
