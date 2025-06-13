import express from "express";
import router from "./router";
import AuthRouter from "./routes/AuthRouter";

const app = express();
//Habilitacion de peticiones json
app.use(express.json());

//Uso de routers
app.use("/", AuthRouter);

export default app;