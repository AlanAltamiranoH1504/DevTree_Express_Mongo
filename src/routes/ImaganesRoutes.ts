import {Router} from "express";
import {prueba, saveImagenCloudinary} from "../controllers/ImagenController";
import protegerRuta from "../middlewares/ProtegerRuta";
const router = Router();

router.get("", prueba);
router.post("", protegerRuta, saveImagenCloudinary)

export default router;