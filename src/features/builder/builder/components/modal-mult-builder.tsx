import type { FC } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useBuilderProvider from "../hooks/use-builder-provider";
import ModalData from "@/components/shared/modal-data";

interface Props {
  open: boolean;
  changeOpen: (open: boolean) => void;
}
const ModalMultBuilder: FC<Props> = ({ changeOpen, open }) => {
  const { countBuilder } = useBuilderProvider();
  return (
    <ModalData
      open={open}
      changeOpen={changeOpen}
      title="Crear Torres Multiples"
      description="Digite el limite a crear"
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
          <Input id="name" defaultValue={countBuilder} className="col-span-3" disabled />
        </div>
        <div className="flex justify-center items-center gap-4">
          <Label htmlFor="username" className="text-right">
            Limite
          </Label>
          <Input id="username" type="number" min={countBuilder} className="col-span-3" />
        </div>
      </div>
    </ModalData>
  )
}
export default ModalMultBuilder