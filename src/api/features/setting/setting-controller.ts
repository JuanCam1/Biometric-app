import { changeNamesSettingsService, changeThemeService, getSettingsOptionsService } from "./setting-services";


export const changeThemeController = async (_: unknown, payload: Pick<SettingOptionsI, "id" | "theme">) => {
  return await changeThemeService(payload);
}


export const changeNamesSettingsController = async (_: unknown, payload: Omit<SettingOptionsI, "theme" | "maxVehiclesPerResident">) => {
  return await changeNamesSettingsService(payload);
}

export const getSettingsOptionsController = async () => {
  return await getSettingsOptionsService();
}