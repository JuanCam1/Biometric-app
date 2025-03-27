import type { FC } from "react";
import ModalData from "@/components/shared/modal-data";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface Props {
  open: boolean;
  changeOpen: (open: boolean) => void;
}
const ModalApt: FC<Props> = ({ changeOpen, open }) => {
  return (
    <ModalData
      open={open}
      changeOpen={changeOpen}
      title="Crear Multiples"
      description="Digite el inicio y el limite a crear"
      textButton="Crear"
      withDialog="lg:max-w-[300px]"
      action={() => {
        console.log("hola");
      }}
    >
      <div className="gap-4 grid py-4">
        <div className="flex justify-center items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Inicio
          </Label>
          <Input autoFocus id="name" min={0} className="col-span-3" />
        </div>
        <div className="flex justify-center items-center gap-4">
          <Label htmlFor="username" className="text-right">
            Limite
          </Label>
          <Input id="username" type="number" className="col-span-3" />
        </div>
      </div>
    </ModalData>
  )
}
export default ModalApt