import type { FC, ReactNode } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip"

interface Props {
  children: ReactNode;
  textTooltip: string;
}
const TooltipData: FC<Props> = ({ children, textTooltip }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          {children}
        </TooltipTrigger>
        <TooltipContent>
          {textTooltip}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
export default TooltipData