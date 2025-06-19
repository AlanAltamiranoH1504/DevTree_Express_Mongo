import jwt from "jsonwebtoken";
import Usuario from "../models/Usuario";

const getUsuario = async (req, res) => {
    try {
        const usuarioEnSesion = req.usuario;
        if (!usuarioEnSesion) {
            return res.status(401).json({
                error: "Sesion no iniciada",
            });
        }
        return res.status(200).json({
            usuarioEnSesion,
            msg: "Llegando a AmdinistracionController"
        })
    }catch (e) {
        return res.status(401).json({
            error: "Sesion no iniciada",
            message: e.message
        })
    }
}
export {
    getUsuario
}