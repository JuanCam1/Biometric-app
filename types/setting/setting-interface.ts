export interface SettingOptions {
  id: number;
  theme: Theme;
  builderType: string;
  aptType: string;
  maxVehiclesPerResident: number;
}


export type Theme = "light" | "dark" | "system";


export interface SettingsCompany {
  id: number;
  name: string;
  description: string;
  logo: string;
  address: string;
  city: string;
  postalCode: string;
  phone: string;
  email: string;
  website: string;
  nit: string;
  randomId: string | null;
}