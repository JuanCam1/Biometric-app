import type { ReactNode, FC } from "react";
import { cn } from "@/lib/utils";

interface Props {
	text: string;
	className?: ReactNode;
}

const TypographyH1: FC<Props> = ({ text, className }) => {
	return (
		<h1
			className={cn(
				"text-prmary font-extrabold text-primary text-4xl lg:text-5xl tracking-tight scroll-m-20 m-0 p-0",
				className,
			)}
		>
			{text}
		</h1>
	);
};
export default TypographyH1;
