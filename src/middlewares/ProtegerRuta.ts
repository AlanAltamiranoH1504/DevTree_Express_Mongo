import jwt, {JwtPayload} from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const protegerRuta = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            error: "No existe autenticacion. JWT no existente."
        });
    }
    //Obtencion de token y validacion
    const token: string = authHeader.split(" ")[1];
    let revisarToken: JwtPayload | string ;
    try {
        revisarToken = jwt.verify(token, process.env.JWT_KEY_SECRET);
    } catch (e) {
        return res.status(401).json({
            error: "JWT corrupto",
            message: e.message
        })
    }
    if (!revisarToken) {
        return res.status(401).json({
            error: "Ocurrio un error en la verificacion del JWT. Inicia Sesión."
        });
    }
    next();
}

export default protegerRuta;