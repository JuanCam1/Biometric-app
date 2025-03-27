import type { FC, ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";


interface Props {
  goAction?: () => void;
  classNameButton?: ReactNode;
  classNameBg?: ReactNode;
  classNameText?: ReactNode;
  Icon?: LucideIcon;
  text?: string;
}

const ButtonAnimated: FC<Props> = ({
  goAction,
  classNameButton,
  classNameBg,
  classNameText,
  Icon,
  text,
}) => {

  if (!goAction) {
    return (
      <button
        type="button"
        className={cn("group relative flex justify-center items-center gap-2 p-2 rounded-lg overflow-hidden font-bold", classNameButton)}
      >
        <span className={cn("absolute inset-0 bg-blue-800 dark:bg-blue-600/25 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300", classNameBg)}></span>

        {
          Icon && <Icon className={cn("z-10 relative size-5 text-white", classNameText)} />
        }
        {
          text && <span className={cn("z-10 relative text-white", classNameText)}>{text}</span>
        }
      </button>
    )
  }


  return (
    <button
      onClick={goAction}
      type="button"
      className={cn("group relative flex justify-center items-center gap-2 p-2 rounded-lg overflow-hidden font-bold", classNameButton)}
    >
      <span className={cn("absolute inset-0 bg-blue-800 dark:bg-blue-600/25 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300", classNameBg)}></span>

      {
        Icon && <Icon className={cn("z-10 relative size-5 text-white", classNameText)} />
      }
      {
        text && <span className={cn("z-10 relative text-white", classNameText)}>{text}</span>
      }
    </button>
  )
}
export default ButtonAnimated