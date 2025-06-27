import {Router} from "express";
import {
    informacionDePerfilPublica,
    pruebaUsuarioController,
    updateInformacion,
    updateLinksUser
} from "../controllers/UsuarioController";
import {requestUpdateInformacionUsuario} from "../requests";
import protegerRuta from "../middlewares/ProtegerRuta";
const router = Router();

router.get("", pruebaUsuarioController);
router.put("/", protegerRuta, requestUpdateInformacionUsuario, updateInformacion);
router.put("/links", protegerRuta, updateLinksUser);
router.get("/:handle", informacionDePerfilPublica);

export default router;