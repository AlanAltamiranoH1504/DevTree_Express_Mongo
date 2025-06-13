import express from "express";
import conexionDB from "./config/db";
import AuthRouter from "./routes/AuthRouter";

const app = express();
app.use(express.json());
conexionDB();

//Uso de routers
app.use("/", AuthRouter);

export default app;