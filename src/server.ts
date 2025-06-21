import express from "express";
import conexionDB from "./config/db";
import AuthRouter from "./routes/AuthRouter";
import loginRouter from "./routes/LoginRouter";
import administracionRouter from "./routes/AdministracionRouter";
import usuarioRoutes from "./routes/UsuarioRoutes";
import {corsConfig} from "./config/cors";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors(corsConfig));
conexionDB();

//Uso de routers
app.use("/", AuthRouter);
app.use("/login", loginRouter);
app.use("/admin", administracionRouter);
app.use("/usuarios", usuarioRoutes);

export default app;