import {Router} from "express";
import {saveUsuario} from "../controllers/RegisterController";
const router = Router();

//Rutas de Autenticacion y Registro
router.post("/auth/registro", saveUsuario);

export default router;