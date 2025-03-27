export const changeTheme = async (payload: Pick<SettingOptionsI, "id" | "theme">) => {
  return await window.api.changeTheme(payload);
};

export const changeNamesSettings = async (payload: Omit<SettingOptionsI, "theme" | "maxVehiclesPerResident">) => {
  return await window.api.changeNamesSettings(payload);
}

export const getSettingsOptions = async () => {
  return await window.api.getSettingsOptions();
}