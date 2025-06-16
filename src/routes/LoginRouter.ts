import {Router} from "express";
import {login} from "../controllers/LoginController";
import {requestLoginUsuario} from "../requests";
import protegerRuta from "../middlewares/ProtegerRuta";
const router = Router();

router.post("", requestLoginUsuario, login);

router.post("/prueba", protegerRuta, (req, res) => {
    res.status(200).json({
        msg: "Funciona la proteccion"
    })
})

export default router;