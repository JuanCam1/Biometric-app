import type { FC, PropsWithChildren, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props extends PropsWithChildren {
	className?: ReactNode;
}

const TypographyP: FC<Props> = ({ className, children }) => {
	return (
		<p className={cn("leading-7 mt-0 text-black dark:text-white", className)}>
			{children}
		</p>
	);
};
export default TypographyP;
