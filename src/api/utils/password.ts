import bcryptjs from "bcryptjs";
import { Constantes } from "../constantes";

export const hashPassword = async (password: string) => {
	return await bcryptjs.hash(password, Constantes.SALT);
};

export const comparePassword = async (password: string, hash: string) => {
	return await bcryptjs.compare(password, hash);
};
