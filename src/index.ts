import dotenv from 'dotenv';
import server from "./server";
import mongoose from "./config/db"
dotenv.config();

const puerto = process.env.PORT || 5000
server.listen(puerto, () => {
    console.log("Servidor corriendo en el puerto: " + puerto);
});