
export interface SettingApiD {
  changeTheme: (payload: Pick<SettingOptionsI, "id" | "theme">) => Promise<
    SendResponseI<string> | SendResponseI<null>
  >;

  changeNamesSettings: (
    payload: Omit<SettingOptionsI, "theme" | "maxVehiclesPerResident">,
  ) => Promise<
    SendResponseI<string> | SendResponseI<null>
  >;

  getSettingsOptions: () => Promise<
    SendResponseI<string> |
    SendResponseI<null> |
    SendResponseI<SettingOptionsI>
  >;

  getDataCompany: () => Promise<
    SendResponseI<string> |
    SendResponseI<null> |
    SendResponseI<CompanyDataI>>;

  updateDataCompany: (payload: SettingsCompanyI) => Promise<
    SendResponseI<string> |
    SendResponseI<null>
  >;

}
