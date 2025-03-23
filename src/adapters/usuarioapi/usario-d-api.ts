import type { Role, Usuario } from "@prisma/client";

export interface UsuarioApiD {
  getRoles: () => Promise<
    SendResponseI<null> | SendResponseI<Role[]>
  >;

  crearUsuario: (
    usuario: Omit<Usuario, "id_usuario">,
  ) => Promise<
    SendResponseI<string> | SendResponseI<null>>;

  actualizarUsuario: (usuario: Usuario) => Promise<SendResponseI<string>>;

  eliminarUsuario: (
    id: number,
  ) => Promise<
    SendResponseI<string> | SendResponseI<null>>;

  getAllUsuarios: () => Promise<
    | SendResponseI<null>
    | SendResponseI<UsuarioModelI[]>
  >;
}
