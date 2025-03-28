import type { FunctionComponent, SVGProps } from "react";
import type { PaginationAll } from "./pagination.model";
import type { SendResponse } from "./response.model";
import type { GetAllBuilder } from "./builder/builder-interface"
import type { MultipleModel } from "./multiple-interface";
import type { SettingOptions, SettingsCompany, Theme } from "./setting/setting-interface";
import type { RoleModel } from "./usuarios/role-model";


declare global {
  type SendResponseI<T> = SendResponse<T>;
  type PaginationAllI = PaginationAll;
  type MultipleModelI = MultipleModel;
  type ThemeI = Theme;
  type GetAllBuilderModelI = GetAllBuilder;
  type SettingOptionsI = SettingOptions;
  type SettingsCompanyI = SettingsCompany;

  interface CompanyDataI extends Omit<SettingsCompanyI, "logo"> {
    logo: {
      blob: Buffer<ArrayBufferLike>;
      type: string;
    } | null;
  }
}

declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.jpeg" {
  const value: string;
  export default value;
}

declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "*.webp" {
  const value: string;
  export default value;
}

declare module "*.svg" {
  export const ReactComponent: FunctionComponent<
    SVGProps<SVGSVGElement>
  >;
  const src: string;
  export default src;
}


export { };