import {TUsuario} from "../types";
import Usuario from "../models/Usuario";

const saveUsuario = async (req, res) => {
    try {
        const usuario: TUsuario = {
            nombre: req.body.nombre,
            email: req.body.email,
            password: req.body.password,
        };
        const usuarioSaved = await Usuario.create(usuario);
        return res.status(201).json({
            msg: "Usuario guardado correctamente"
        });
    } catch (e) {
        return res.status(400).json({
            error: e.message
        });
    }
}

export {
    saveUsuario
}