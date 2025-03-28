import { ipcRenderer } from "electron";

export const SettingApi = {

  changeTheme: async (
    payload: Pick<SettingOptionsI, "id" | "theme">,
  ): Promise<
    SendResponseI<string> | SendResponseI<null>
  > => ipcRenderer.invoke("changeTheme", payload),

  changeNamesSettings: async (
    payload: Omit<SettingOptionsI, "theme" | "maxVehiclesPerResident">,
  ): Promise<
    SendResponseI<string> | SendResponseI<null>
  > => ipcRenderer.invoke("changeNamesSettings", payload),

  getSettingsOptions: async (): Promise<
    SendResponseI<string> |
    SendResponseI<null> |
    SendResponseI<SettingOptionsI>
  > => ipcRenderer.invoke("getSettingsOptions"),

  getDataCompany: async (): Promise<
    SendResponseI<string> |
    SendResponseI<null> |
    SendResponseI<CompanyDataI>
  > => ipcRenderer.invoke("getDataCompany"),

  updateDataCompany: async (payload: SettingsCompanyI): Promise<
    SendResponseI<string> |
    SendResponseI<null>
  > => ipcRenderer.invoke("updateDataCompany", payload),
};
