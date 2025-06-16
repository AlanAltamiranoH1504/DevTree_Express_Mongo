import {Router} from "express";
import {login} from "../controllers/LoginController";
import {requestLoginUsuario} from "../requests";
const router = Router();

router.post("", requestLoginUsuario, login);

export default router;