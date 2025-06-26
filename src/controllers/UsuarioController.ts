import {Result, ValidationError, validationResult} from "express-validator";
import {TUsuario, TUsuarioUpdateInformacion} from "../types";
import usuario from "../models/Usuario";
import Usuario from "../models/Usuario";
import {generacionSlug} from "../utils/auth";

const pruebaUsuarioController = (req, res) => {
    res.status(200).json({
        msg: "Llegando al controlador de usuario"
    });
}

const updateInformacion = async (req, res) => {
    const errors: Result<ValidationError> = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(409).json({
            errors: errors.array()
        });
    }
    try {
        const usuarioEnSesion = req.usuario;
        const informacionActualizado: TUsuarioUpdateInformacion = req.body;

        //Verificacion de handle no este usuado
        const handleRegistrado = await Usuario.findOne({
            handle: generacionSlug(req.body.handle)
        });
        if (handleRegistrado && handleRegistrado.email !== usuarioEnSesion.email) {
            return res.status(409).json({
                msg: "Username ya en uso."
            });
        }

        const usuarioActualizar = await usuario.findOne({email: usuarioEnSesion.email}).select("nombre handle email descripcion");
        usuarioActualizar.handle = informacionActualizado.handle;
        usuarioActualizar.descripcion = informacionActualizado.descripcion.trim() === "" ? " " : informacionActualizado.descripcion;
        await usuarioActualizar.save();
        res.status(200).json({
            msg: "Información actualizada correctamente.",
        });
    } catch (e) {
        return res.status(500).json({
            error: "Error en actualizacion de informacion de usuario.",
            message: e.message
        })
    }
}

const updateLinksUser = async (req, res) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(409).json({
            errores: errores.array()
        });
    }
    try {
        const userInSession = req.usuario;
        const {links} = req.body;
        const usuarioToUpdate = await Usuario.findOneAndUpdate({
            email: userInSession.email
        }, {
            $set: {
                links: links
            }
        });
        usuarioToUpdate.save();
        return res.status(200).json({
            msg: "Link actualizado correctamente.",
        })
    } catch (e) {
        return res.status(500).json({
            error: "Error en la actualizacion de link del usuario.",
            message: e.message
        });
    }
}

export {
    pruebaUsuarioController,
    updateInformacion,
    updateLinksUser
}