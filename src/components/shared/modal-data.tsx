import type { FC, ReactNode } from "react";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog"
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface Props {
  withDialog?: string;
  open: boolean;
  changeOpen: (open: boolean) => void;
  title: string;
  description?: string;
  textButton: string;
  children: ReactNode;
  action: () => void;
}
const ModalData: FC<Props> = ({
  withDialog,
  changeOpen,
  open,
  title,
  description,
  textButton,
  children,
  action
}) => {
  return (
    <Dialog open={open} onOpenChange={changeOpen}>
      <DialogContent className={cn("sm:max-w-[425px]", withDialog)}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        {children}
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary" className="px-4">
              Salir
            </Button>
          </DialogClose>
          <Button onClick={action} type="submit" className="px-4 text-white">{textButton}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
export default ModalData