import { ArrowBigLeftDash } from "lucide-react";

const ButtonReturn = () => {
	const goReturn = () => {
		console.log("go return");
	};
	return (
		<div className="top-0 left-0 absolute flex gap-2 pt-2 pl-2">
			<button
				onClick={goReturn}
				type="button"
				className="group after:bottom-0 after:left-0 after:absolute relative flex justify-center items-center gap-2 after:bg-blue-500 p-1 after:w-full after:h-[2px] font-bold text-zinc-500 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
			>
				<ArrowBigLeftDash className="group-hover:text-primary" />
				<span className="group-hover:text-primary">Volver</span>
			</button>
		</div>
	);
};

export default ButtonReturn;
