import type { FC, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
	className?: ReactNode;
	text: string;
}
const TypographyH3: FC<Props> = ({ className, text }) => {
	return (
		<h3
			className={cn(
				"text-primary scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 font-lato",
				className,
			)}
		>
			{text}
		</h3>
	);
};
export default TypographyH3;
