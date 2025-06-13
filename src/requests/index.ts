import {body} from "express-validator";

const requestSaveUsuario = [
    body("nombre")
        .notEmpty().withMessage("El nombre es obligatorio."),
    body("email")
        .notEmpty().withMessage("El email es obligatorio.")
        .isEmail().withMessage("El email debe tener un formato correcto"),
    body("password")
        .notEmpty().withMessage("El password es obligatorio,")
        .isLength({min: 5}).withMessage("El password debe tener al menos 5 caracteres"),
    body("handle")
        .notEmpty().withMessage("El username es obligatorio.")
];

export {
    requestSaveUsuario
}