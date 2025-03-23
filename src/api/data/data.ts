import { hashPassword } from "../utils/password";
import { prisma } from "../utils/prisma";

const crearRoles = async () => {
	try {
		const rolesCount = await prisma.role.count();

		if (rolesCount === 0) {
			await prisma.role.createMany({
				data: [
					{
						id_role: 1,
						nombre_role: "Técnico",
					},
					{
						id_role: 2,
						nombre_role: "Guarda",
					},
				],
			});
		}
	} catch (error) {
		console.log(error);
	}
};

const createDefaultUser = async () => {
	try {
		const userCount = await prisma.usuario.count();
		const pass = "12345";
		const hash = await hashPassword(pass);

		if (userCount === 0) {
			await prisma.usuario.createMany({
				data: [
					{
						id_usuario: 1,
						nombre_usuario: "administrador",
						password_usuario: hash,
						id_role: 1,
					},
					{
						id_usuario: 2,
						nombre_usuario: "guarda",
						password_usuario: hash,
						id_role: 2,
					},
				],
			});
			console.log("Usuario por defecto creado");
		} else {
			console.log("Usuarios ya existen en la base de datos");
		}
	} catch (error) {
		console.error("Error al verificar o crear el usuario por defecto:", error);
	}
};

const createDefaultTiposVehiculos = async () => {
	try {
		const rolesTipoVe = await prisma.tipoVehiculo.count();

		if (rolesTipoVe === 0) {
			await prisma.tipoVehiculo.createMany({
				data: [
					{
						id_tipo_vehiculo: 1,
						tipo_vehiculo: "Moto",
					},
					{
						id_tipo_vehiculo: 2,
						tipo_vehiculo: "Carro",
					},
				],
			});
		}
	} catch (error) {
		console.log(error);
	}
};

const createDefaultTorre = async () => {
	try {
		const countTorre = await prisma.torre.count();
		if (countTorre === 0) {
			const torreAdministrativa = await prisma.torre.create({
				data: {
					id_torre: 1,
					nombre_torre: "Administración",
				},
			});

			if (torreAdministrativa) {
				const aptAdminstracion = await prisma.apartamento.createMany({
					data: {
						id_torre: 1,
						nombre_apartamento: "Administración",
						id_apartamento: 1,
					},
				});

				if (aptAdminstracion) {
					await prisma.residente.create({
						data: {
							id_apartamento: 1,
							id_residente: 1,
							nombre_residente: "ADMINISTRACIÓN",
							cedula_residente: "1095951",
							telefono_residente: "123456789",
						},
					});
				}
			}
		}
	} catch (error) {
		console.log(error);
	}
};

export const agregarData = async () => {
	try {
		await crearRoles();
		await createDefaultUser();
		await createDefaultTiposVehiculos();
		await createDefaultTorre();
	} catch (error) {
		console.log(error);
	}
};
