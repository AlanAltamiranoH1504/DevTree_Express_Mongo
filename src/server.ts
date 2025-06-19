import express from "express";
import conexionDB from "./config/db";
import AuthRouter from "./routes/AuthRouter";
import loginRouter from "./routes/LoginRouter";
import administracionRouter from "./routes/AdministracionRouter";
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

export default app;