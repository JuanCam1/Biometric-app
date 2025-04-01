import type { Builder } from "@prisma/client";

export interface BuilderApiD {
  createBuilderUnique: () => Promise<
    SendResponseI<string> | SendResponseI<null>
  >;

  createBuilderMultiple: (
    payload: MultipleModelI,
  ) => Promise<
    SendResponseI<string> | SendResponseI<null>
  >;

  getAllBuilder: () => Promise<
    SendResponseI<null> | SendResponseI<GetAllBuilderModelI[]>
  >;

  deleteBuilder: (
    id_torre: number,
  ) => Promise<
    SendResponseI<string> | SendResponseI<null>
  >;

  builderById: (
    id_torre: number,
  ) => Promise<
    SendResponseI<string> | SendResponseI<null> | SendResponseI<Builder>
  >;

  changeStateBuilder: (
    id_torre: number,
  ) => Promise<
    SendResponseI<string> | SendResponseI<null>
  >;


}
