import { changeNamesSettingsService, changeThemeService, getDataCompanyService, getSettingsOptionsService, updateDataCompanyService } from "./setting-services";


export const changeThemeController = async (_: unknown, payload: Pick<SettingOptionsI, "id" | "theme">) => {
  return await changeThemeService(payload);
}


export const changeNamesSettingsController = async (_: unknown, payload: Omit<SettingOptionsI, "theme">) => {
  return await changeNamesSettingsService(payload);
}

export const getSettingsOptionsController = async () => {
  return await getSettingsOptionsService();
}

export const getDataCompanyController = async () => {
  return await getDataCompanyService();
}

export const updateDataCompanyController = async (_: unknown, payload: SettingsCompanyI) => {
  return await updateDataCompanyService(payload);
}