export interface SettingOptions {
  id: number;
  theme: Theme;
  builderType: string;
  aptType: string;
}


export type Theme = "light" | "dark" | "system";