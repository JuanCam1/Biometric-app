import {
	Users,
	LayoutDashboard,
	ShieldCheck,
	CalendarCheck2,
	Building2,
} from "lucide-react";

export const pathsSidebar = [
	{
		title: "Panel de Control",
		icon: LayoutDashboard,
		url: "/home/dashboard",
	},
	{
		title: "Residentes",
		icon: Users,
		url: "/home/builder",
	},
	{
		title: "Visitas",
		icon: CalendarCheck2,
		url: "/home/builder",
	},
];

export const pathsAdmin = {
	title: "Administración",
	icon: ShieldCheck,
	isActive: false,
	items: [
		{
			icon: Users,
			title: "Usuarios",
			url: "/home/dashboard",
		},
		{
			icon: Users,
			title: "Residentes",
			url: "/home/dashboard",
		},
		{
			icon: CalendarCheck2,
			title: "Visitas",
			url: "/home/dashboard",
		},
		{
			icon: Building2,
			title: "Apartamentos",
			url: "/home/Apartamentos",
		},
	],
};
