import bcrypt from "bcrypt";
import slug from "slug";

export const hasheoPasswords = async (password: string) => {
    const passwordHasheada = await bcrypt.hash(password, 10);
    return passwordHasheada;
}

export const generacionSlug = (nombre: string) => {
    const usernameSlug = slug(nombre, "_");
    return usernameSlug;
}

export const comparacionPasswords = (passwordNoHasheada: string, passwordHasehada: string) => {
    return bcrypt.compare(passwordNoHasheada, passwordHasehada);
}