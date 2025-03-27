import type { FC } from "react";
import { useRouter } from "@tanstack/react-router";
import { ArrowBigLeftDash } from "lucide-react";


interface Props {
  goReturn?: () => void;
}
const ButtonReturn: FC<Props> = ({ goReturn }) => {
  const router = useRouter();
  const goAction = () => router.history.back();

  return (
    <button
      onClick={goReturn ?? goAction}
      type="button"
      className="group after:bottom-0 after:left-0 after:absolute relative flex justify-center items-center gap-2 after:bg-blue-500 p-1 pr-2 after:w-full after:h-[2px] font-bold text-zinc-500 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
    >
      <ArrowBigLeftDash className="group-hover:text-primary" />
      <span className="group-hover:text-primary">Volver</span>
    </button>
  );
};

export default ButtonReturn;
