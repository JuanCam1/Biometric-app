import type { FC } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import useOptions from "../hooks/use-options-theme";
import type { Theme } from "@/contexts/theme-provider";


interface Props {
  id: number;
  themeDb: Theme;
}

const ToggleModeSettings: FC<Props> = ({ id, themeDb }) => {
  const { onChangeTheme, theme } = useOptions({ themeDb, id });

  return (
    <div className="flex flex-col justify-center items-center gap-3 w-full">
      <div className="flex gap-3 w-full max-w-[80%]">
        <button
          onClick={() => onChangeTheme("light")}
          type="button"
          className={cn("flex flex-col justify-between items-center dark:bg-zinc-800 bg-stone-100 hover:bg-stone-200 dark:hover:bg-zinc-900 p-4 border-2 border-stone-100 dark:border-zinc-800 rounded-md w-1/3 transition-all delay-75 ease-out", theme === "light" && "bg-stone-200 border-stone-200 dark:bg-zinc-900 dark:border-zinc-600")}
        >
          <Sun className="mb-2 w-6 h-6" />
          <span className="font-medium">Claro</span>
        </button>

        <button
          onClick={() => onChangeTheme("dark")}
          type="button"
          className={cn("flex flex-col justify-between items-center dark:bg-zinc-800 bg-stone-100 hover:bg-stone-200 dark:hover:bg-zinc-900 p-4 border-2 border-stone-100 dark:border-zinc-800 rounded-md w-1/3 transition-all delay-75 ease-out", theme === "dark" && "bg-stone-200 border-stone-200 dark:bg-zinc-900 dark:border-zinc-600")}
        >
          <Moon className="mb-2 w-6 h-6" />
          <span className="font-medium">Oscuro</span>
        </button>

        <button
          onClick={() => onChangeTheme("system")}
          type="button"
          className={cn("flex flex-col justify-between items-center dark:bg-zinc-800 bg-stone-100 hover:bg-stone-200 dark:hover:bg-zinc-900 p-4 border-2 border-stone-100 dark:border-zinc-800 rounded-md w-1/3 transition-all delay-75 ease-out", theme === "system" && "bg-stone-200 border-stone-200 dark:bg-zinc-900 dark:border-zinc-600")}
        >
          <div className="flex space-x-1">
            <Sun className="w-6 h-6" />
            <Moon className="w-6 h-6" />
          </div>
          <span className="font-medium">Sistema</span>
        </button>

      </div>
      <span className="text-muted-foreground text-sm">
        Seleccione el tema que desea utilizar en la aplicación.
      </span>
    </div>
  )
}
export default ToggleModeSettings