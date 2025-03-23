import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import CompanyForm from "@/features/settings/sections/company-form";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/home/settings/company")({
	component: CompanyComponent,
});

function CompanyComponent() {
	return (
		<div className="flex flex-col items-center gap-8 p-8 w-full h-full">
			<Card className="dark:bg-zinc-950/80 w-full">
				<CardHeader>
					<CardTitle>Información de la Empresa</CardTitle>
					<CardDescription>
						Actualiza la información de tu empresa. Esta información se mostrará
						en reportes y comunicaciones.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<CompanyForm />
				</CardContent>
			</Card>
		</div>
	);
}
