import { ipcRenderer } from "electron";
import type { Role, Usuario } from "@prisma/client";

export const usuarioApi = {
  getRoles: async (): Promise<
    SendResponseI<null> | SendResponseI<Role[]>
  > => ipcRenderer.invoke("get-roles"),

  crearUsuario: async (
    usuario: Omit<Usuario, "id_usuario">,
  ): Promise<
    SendResponseI<string> | SendResponseI<null>
  > => ipcRenderer.invoke("crear-usuario", usuario),

  actualizarUsuario: async (usuario: Usuario): Promise<SendResponseI<string>> =>
    ipcRenderer.invoke("actualizar-usuario", usuario),

  eliminarUsuario: async (
    id: number,
  ): Promise<
    SendResponseI<string> | SendResponseI<null>
  > => ipcRenderer.invoke("eliminar-usuario", id),

  getAllUsuarios: async (): Promise<
    | SendResponseI<null>
    | SendResponseI<UsuarioModelI[]>
  > => ipcRenderer.invoke("get-usuarios"),
};
