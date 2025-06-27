import {Router} from "express";
import {
    handleRegistrado,
    informacionDePerfilPublica,
    pruebaUsuarioController,
    updateInformacion,
    updateLinksUser
} from "../controllers/UsuarioController";
import {requestSearchHandle, requestUpdateInformacionUsuario} from "../requests";
import protegerRuta from "../middlewares/ProtegerRuta";
const router = Router();

router.get("", pruebaUsuarioController);
router.put("/", protegerRuta, requestUpdateInformacionUsuario, updateInformacion);
router.put("/links", protegerRuta, updateLinksUser);
router.get("/:handle", informacionDePerfilPublica);
router.post("/handle", requestSearchHandle, handleRegistrado);

export default router;