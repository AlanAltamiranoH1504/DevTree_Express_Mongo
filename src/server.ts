import express from "express";
import conexionDB from "./config/db";
import AuthRouter from "./routes/AuthRouter";
import LoginRouter from "./routes/LoginRouter";
import loginRouter from "./routes/LoginRouter";

const app = express();
app.use(express.json());
conexionDB();

//Uso de routers
app.use("/", AuthRouter);
app.use("/login", loginRouter);

export default app;