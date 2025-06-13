import {Router} from "express";
import {saveUsuario} from "../controllers/RegisterController";
import {requestSaveUsuario} from "../requests";
const router = Router();

//Rutas de Autenticacion y Registro
router.post("/auth/registro", requestSaveUsuario, saveUsuario);

export default router;