import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const conexionDB = async () => {
    try {
        const conexion = await mongoose.connect(process.env.URI_DATA_BASE);
        console.log("Conexion correcta a la base de datos");
    }catch (e) {
        console.log("Error en la conexion a la base de datos");
        console.log(e.message);
    }
}

export default conexionDB;