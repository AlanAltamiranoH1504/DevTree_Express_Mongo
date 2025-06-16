import {Result, ValidationError, validationResult} from "express-validator";
import {TUsuarioLogin} from "../types";
import Usuario from "../models/Usuario";
import {comparacionPasswords} from "../utils/auth";
import {generetedJWT} from "../utils/jwt";

const login = async (req, res) => {
    try {
        const errors: Result<ValidationError> = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(409).json({
                errors: errors.array()
            });
        }
        const requestLogin : TUsuarioLogin = {
            email: req.body.email,
            password: req.body.password
        };
        //Busqueda de usuario con ese email
        const usuarioExists = await Usuario.findOne(({
            email: requestLogin.email
        }));
        if (!usuarioExists) {
            return res.status(404).json({
                "error": "E-Mail no asociado a un usuario."
            });
        }
        //Comparacion de pasword
        const passwordCorrectas = await comparacionPasswords(requestLogin.password, usuarioExists.password);
        if (!passwordCorrectas) {
            return res.status(403).json({
                "error": "Credenciales nos validas"
            });
        } else {
            return res.status(200).json({
                "message": "Login correcto",
                "jwt": generetedJWT(usuarioExists.id, usuarioExists.email)
            });
        }
    }catch (e) {
        return res.status(500).json({
            "error": "Error en inicio de sesion",
            "message": e.message
        })
    }
}

export {
    login
}