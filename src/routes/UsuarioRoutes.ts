import {Router} from "express";
import {pruebaUsuarioController, updateInformacion} from "../controllers/UsuarioController";
import {requestUpdateInformacionUsuario} from "../requests";
import protegerRuta from "../middlewares/ProtegerRuta";
const router = Router();

router.get("", pruebaUsuarioController);
router.put("/", protegerRuta, requestUpdateInformacionUsuario, updateInformacion);

export default router;