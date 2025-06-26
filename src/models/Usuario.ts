import mongoose from "mongoose";
import {TUsuario} from "../types";
const {Schema} = mongoose;

const usuarioSchema = new Schema({
    handle: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
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
    },
    descripcion: {
        type: String,
        required: false,
        default: " "
    },
    imagen: {
        type: String,
        required: false,
        default: " "
    },
    urlImagen: {
        type: String,
        required: false,
        default: " "
    },
    links: [
        {
            nombre: String,
            url: String,
            enabled: Boolean
        }
    ]
});

const Usuario = mongoose.model<TUsuario>("Usuario", usuarioSchema);
export default Usuario;