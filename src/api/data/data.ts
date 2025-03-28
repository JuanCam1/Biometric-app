import { hashPassword } from "../utils/password";
import { prisma } from "../utils/prisma";


const createConfiguration = async () => {
  try {
    const configurationCount = await prisma.configuration.count();

    if (configurationCount === 0) {
      await prisma.configuration.create({
        data: {
          id: 1,
          theme: "light",
          builderType: "Torre",
          aptType: "Apartamento",
          maxVehiclesPerResident: 2,
        },
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const createRoles = async () => {
  try {
    const rolesCount = await prisma.role.count();

    if (rolesCount === 0) {
      await prisma.role.createMany({
        data: [
          {
            id: 1,
            name: "Administrador",
          },
          {
            id: 2,
            name: "Guarda",
          },
        ],
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const createState = async () => {
  try {
    const stateCount = await prisma.state.count();

    if (stateCount === 0) {
      await prisma.state.createMany({
        data: [
          {
            id: 1,
            state: "Activo",
          },
          {
            id: 2,
            state: "Inactivo",
          },
        ],
      });
    }
  } catch (error) {
    console.log(error);
  }
}

const createDocumentsTypes = async () => {
  try {
    const typesCount = await prisma.typeDocument.count();

    if (typesCount === 0) {
      await prisma.typeDocument.createMany({
        data: [
          {
            id: 1,
            type: "CC",
          },
          {
            id: 2,
            type: "DI",
          },
        ],
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const createUsers = async () => {
  try {
    const userCount = await prisma.user.count();
    const pass = "password1.";
    const hash = await hashPassword(pass);

    if (userCount === 0) {
      await prisma.user.createMany({
        data: [
          {
            id: 1,
            username: "Carlos Ramirez",
            phone: "3208429241",
            documentTypeId: 1,
            idCard: "1095951",
            password: hash,
            email: "carlos@gmail.com",
            stateId: 1,
            roleId: 1,

          },
          {
            id: 2,
            username: "Diego Cadena",
            documentTypeId: 1,
            idCard: "1095959",
            phone: "3158928456",
            password: hash,
            email: "diego@gmail.com",
            stateId: 1,
            roleId: 2,
          },

        ],
      });
      console.log("Usuarios creados con éxito");
    } else {
      console.log("Usuarios ya existen en la base de datos");
    }
  } catch (error) {
    console.error("Error al verificar o crear el usuario por defecto:", error);
  }
};

const createTypeVehicles = async () => {
  try {
    const typeCounts = await prisma.typeVehicle.count();

    if (typeCounts === 0) {
      await prisma.typeVehicle.createMany({
        data: [
          {
            id: 1,
            type: "Moto",
          },
          {
            id: 2,
            type: "Carro",
          },
        ],
      });
    }
  } catch (error) {
    console.error("Error al verificar o crear el tipo vehiculo por defecto:", error);
  }
};

const createCompany = async () => {
  try {
    const companyCount = await prisma.company.count();

    if (companyCount === 0) {
      await prisma.company.create({
        data: {
          id: 1,
          name: "Empresa",
          description: "Sin descripción",
          logo: "Sin logo",
          address: "Sin dirección",
          city: "Bucaramanga",
          postalCode: "Sin código postal",
          phone: "Sin teléfono",
          email: "Sin email",
          website: "Sin web",
          nit: "Sin NIT",
          randomId: null,
        },
      });
    }
  } catch (error) {
    console.error("Error al verificar o crear la empresa por defecto:", error);
  }
};

export const defaultData = async () => {
  try {
    await createConfiguration();
    await createRoles();
    await createState();
    await createDocumentsTypes();
    await createUsers();
    await createTypeVehicles();
    createCompany();
  } catch (error) {
    console.log(error);
  }
};
