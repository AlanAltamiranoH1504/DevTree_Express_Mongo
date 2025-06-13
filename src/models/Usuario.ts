import mongoose from "mongoose";
import {TUsuario} from "../types";
const {Schema} = mongoose;

const usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    token: {
        type: String,
    },
    confirmado: {
        type: Boolean,
        default: false
    }
});

const Usuario = mongoose.model<TUsuario>("Usuario", usuarioSchema);
export default Usuario;