import {Router} from "express";
const router = Router();

router.get("/", (req, res) => {
    res.send("Hello World!");
});

router.get("/nosotros", (req, res) => {
    res.send("Nosotros");
});

export default router;