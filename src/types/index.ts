export type TUsuario = {
    handle: string;
    nombre: string;
    email: string;
    password: string;
    descripcion: string;
    imagen: string;
    urlImagen: string;
    links: string
}

export type TUsuarioRegistro = Pick<TUsuario, "handle" | "nombre" | "email" | "password">
export type TUsuarioUpdateInformacion = Pick<TUsuario, "handle" | "descripcion">

export type TUsuarioLogin = {
    email: string;
    password: string;
}