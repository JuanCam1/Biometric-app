import { Building2, Edit, MoreHorizontal, Trash } from "lucide-react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "@tanstack/react-router";

type Torre = {
	id: number;
	nombre: string;
	totalApartamentos: number;
	estado: "activa" | "inactiva";
};

const torres: Torre[] = [
	{
		id: 1,
		nombre: "Torre A",
		totalApartamentos: 30,
		estado: "activa",
	},
	{
		id: 2,
		nombre: "Torre B",
		totalApartamentos: 30,
		estado: "activa",
	},
	{
		id: 3,
		nombre: "Torre C",
		totalApartamentos: 30,
		estado: "activa",
	},
	{
		id: 4,
		nombre: "Torre D",
		totalApartamentos: 30,
		estado: "inactiva",
	},
	{
		id: 5,
		nombre: "Torre E",
		totalApartamentos: 30,
		estado: "inactiva",
	},
];

const BuilderList = () => {
	return (
		<div className="gap-4 grid md:grid-cols-2 lg:grid-cols-4">
			{torres.map((torre) => (
				<Card
					key={torre.id}
					className="dark:bg-zinc-900 dark:border-zinc-600 overflow-hidden"
				>
					<CardHeader className="relative pt-8 pb-2">
						<div className="flex justify-between items-center">
							<div>
								<CardTitle className="flex items-center gap-2 md:text-sm">
									<Building2 className="w-5 h-5" />
									{torre.nombre}
								</CardTitle>
							</div>
							<Badge
								className="text-white"
								variant={
									torre.estado === "activa"
										? "default"
										: torre.estado === "inactiva"
											? "secondary"
											: "outline"
								}
							>
								{torre.estado === "activa"
									? "Activa"
									: torre.estado === "inactiva" && "Inactiva"}
							</Badge>
							<div className="top-0 right-0 absolute">
								<DropdownMenu>
									<DropdownMenuTrigger asChild>
										<Button variant="ghost" size="icon" className="w-8 h-8">
											<MoreHorizontal className="w-4 h-4" />
										</Button>
									</DropdownMenuTrigger>
									<DropdownMenuContent
										align="center"
										className="dark:bg-zinc-800"
									>
										<DropdownMenuLabel>Opciones</DropdownMenuLabel>
										<DropdownMenuSeparator />
										<DropdownMenuItem className="dark:hover:bg-zinc-900">
											<Edit className="mr-2 w-4 h-4" />
											Editar
										</DropdownMenuItem>
										<DropdownMenuItem className="dark:hover:bg-zinc-900">
											<Trash className="mr-2 w-4 h-4" />
											Eliminar
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</div>
						</div>
					</CardHeader>

					<CardContent className="pb-4">
						<div className="space-y-2">
							<div className="flex text-sm">
								<span className="text-muted-foreground">Apartamentos: </span>
								<span className="pl-2 font-medium">
									{torre.totalApartamentos}
								</span>
							</div>
						</div>
					</CardContent>
					<CardFooter className="flex justify-between">
						<Button variant="outline" size="sm" asChild>
							<Link
								to="/home/builder/$builderId"
								params={{
									builderId: torre.id.toString(),
								}}
							>
								Ver Apartamentos
							</Link>
						</Button>
					</CardFooter>
				</Card>
			))}
		</div>
	);
};

export default BuilderList;
