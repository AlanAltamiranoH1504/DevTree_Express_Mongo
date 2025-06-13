import {Router} from "express";
const router = Router();

//Rutas de Autenticacion y Registro
router.post("/auth/registro", (req, res) => {
   console.log(req.body);
});

export default router;