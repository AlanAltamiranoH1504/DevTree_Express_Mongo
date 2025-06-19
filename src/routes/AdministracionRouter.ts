import {Router} from "express";
import {getUsuario} from "../controllers/AdministracionController";
import protegerRuta from "../middlewares/ProtegerRuta";
const router = Router();

router.get("", protegerRuta, getUsuario);

export default router;