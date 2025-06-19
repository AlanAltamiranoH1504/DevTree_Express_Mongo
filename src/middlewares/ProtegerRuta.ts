import jwt, {JwtPayload} from "jsonwebtoken";
import dotenv from "dotenv";
import Usuario from "../models/Usuario";

dotenv.config();

const protegerRuta = async (req, res, next) => {
    try {
        const AUTORIZATION_JWT = req.headers.authorization;
        //Validacion de existencia de JWT
        if (!AUTORIZATION_JWT) {
            return res.status(401).json({
                error: "JWT No Encontrado"
            });
        }

        //Verificamos validacion de token y obtenecion de informacion
        const token = AUTORIZATION_JWT.split(" ")[1];
        if (!token) {
            return res.status(401).json({
                error: "JWT Corrupto"
            });
        }
        const tokenValido = jwt.verify(token, process.env.JWT_KEY_SECRET);
        if (!tokenValido) {
            return res.status(401).json({
                error: "JWT Corrupto"
            });
        }
        //Verificacion tipado JWT
        if (typeof tokenValido === "string") {
            return res.status(401).json({
                error: "JWT Corrupto"
            });
        }
        //Verificacion de existencia del cuerpo del JWT
        const {email, id} = tokenValido;
        if (!email || !id) {
            return res.status(401).json({
                error: "JWT Corrupto"
            });
        }

        const usuarioEnSesion = await Usuario.findOne({
            email: email,
        }).select("nombre handle email");
        if (!usuarioEnSesion) {
            return res.status(404).json({
                error: "Usuario no encontrado"
            });
        }
        req.usuario = usuarioEnSesion;
        next();
    } catch (e) {
        return res.status(401).json({
            error: "Sesion no iniciada",
            message: e.message
        })
    }

}

export default protegerRuta;