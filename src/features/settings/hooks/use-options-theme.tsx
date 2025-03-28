import { type Theme, useTheme } from "@/contexts/theme-provider";
import { useMutation } from "@tanstack/react-query";

import { useEffect } from "react";
import { changeTheme } from "../services/settings-api";
import { queryClient } from "@/lib/query";
import { KeysQuery } from "@/const/keys-query";
import { notification } from "@/lib/notification";



interface Props {
  themeDb: Theme;
  id: number;
}
const useOptions = ({ themeDb, id }: Props) => {
  const { theme, setTheme } = useTheme();

  const themeMutation = useMutation({
    mutationFn: (payload: Pick<SettingOptionsI, "id" | "theme">) => {
      return changeTheme(payload);
    }
  })

  useEffect(() => {
    if (themeDb) {
      setTheme(themeDb);
    }
  }, [themeDb]);


  const onChangeTheme = (theme: Theme) => {
    try {
      themeMutation.mutate({
        id: Number(id),
        theme: theme
      }, {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: [KeysQuery.settingsOptions] })
          setTheme(theme);
          notification("Configuración guardada", "success");
        },
      })
    } catch (error) {
      notification("Error al guardar la configuración", "error");
      console.log(error);
    }
  }
  return {
    onChangeTheme,
    theme
  }
}
export default useOptions