import {TUsuario, TUsuarioRegistro} from "../types";
import {ValidationError, Result} from "express-validator";

import Usuario from "../models/Usuario";
import {validationResult} from "express-validator";
import {generacionSlug, hasheoPasswords} from "../utils/auth";

const saveUsuario = async (req, res) => {
    try {
        //Validacion de errores
        const errores: Result<ValidationError> = validationResult(req);
        if (!errores.isEmpty()) {
            const erroresArray: ValidationError[] = errores.array();
            return res.status(400).json(erroresArray);
        }

        //Busqueda de email ya registrado
        const usuarioExistente = await Usuario.findOne({email: req.body.email});
        if (usuarioExistente) {
            return res.status(409).json({
                msg: "Email ya registrado."
            });
        }

        //Busqueda de handle ya registrado
        const handleRegistrado = await Usuario.findOne(({handle: generacionSlug(req.body.handle)}));
        if (handleRegistrado) {
            return res.status(409).json({
                msg: "Username ya registrado."
            });
        }

        //Registro de usuario
        const passwordHash : string =  await hasheoPasswords(req.body.password);
        const handleCreado = generacionSlug(req.body.handle);
        const usuario: TUsuarioRegistro = {
            nombre: req.body.nombre,
            email: req.body.email,
            password: passwordHash,
            handle: handleCreado
        };
        const usuarioSaved = await Usuario.create(usuario);
        return res.status(201).json({
            msg: "Usuario guardado correctamente."
        });
    } catch (e) {
        return res.status(400).json({
            msg: e.message
        });
    }
}

export {
    saveUsuario
}