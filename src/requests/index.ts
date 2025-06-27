import {body, ValidationChain} from "express-validator";

const requestSaveUsuario: ValidationChain[] = [
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

const requestLoginUsuario: ValidationChain[] = [
    body("email")
        .notEmpty().withMessage("El email es obligatorio.")
        .isEmail().withMessage("El formato del email no es el correcto"),
    body("password")
        .notEmpty().withMessage("El password es obligatorio")
        .isLength({min: 5}).withMessage("El password debe tener al menos 5 caracteres"),
]

const requestUpdateInformacionUsuario: ValidationChain[] = [
    body("handle")
        .notEmpty().withMessage("El hadnle es obligatorio.")
]

const requestSearchHandle = [
    body("handle")
        .notEmpty().withMessage("El handle de busqueda es obligatorio.")
];

export {
    requestSaveUsuario,
    requestLoginUsuario,
    requestUpdateInformacionUsuario,
    requestSearchHandle
}