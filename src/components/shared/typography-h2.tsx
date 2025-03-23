import type { FC, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
	className?: ReactNode;
	text: string;
}
const TypographyH2: FC<Props> = ({ className, text }) => {
	return (
		<h2
			className={cn(
				"scroll-m-20 text-2xl font-semibold tracking-tight text-primary",
				className,
			)}
		>
			{text}
		</h2>
	);
};
export default TypographyH2;
