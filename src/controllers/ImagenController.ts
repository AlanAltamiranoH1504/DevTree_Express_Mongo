import formidable from "formidable";
import cloudDinary from "../config/cloudDinary";
import {v4 as uuidv4} from "uuid";
import Usuario from "../models/Usuario";

const prueba = (req, res) => {
    return res.status(200).json({
        msg: "Llegando al controlador de imagen controler"
    });
}

const saveImagenCloudinary = async (req, res) => {
    //Configuracion de formidable
    const form = formidable({
        multiples: false,

    });
    try {
        //Manejo de archivos
        form.parse(req, (err, fields, files) => {
            //Validacion de mimes de archivo
            const mimeTypePermitidos = ["image/png", "image/jpeg"];
            if (!mimeTypePermitidos.includes(files.imagen[0].mimetype)) {
                return res.status(409).json({
                    error: "Extension de archivo no valida."
                });
            }

            //Upload cloudinary
            cloudDinary.uploader.upload(files.imagen[0].filepath, {public_id: uuidv4()}, async function (error, result) {
                if (error) {
                    const error = new Error("Error en subida de imagen")
                    return res.status(500).json({
                        error
                    });
                } else {
                    const secureURL = result.secure_url;
                    const publiId = result.public_id;
                    const usuarioEnSesion = req.usuario;
                    const eliminacionImagenVieja = await cloudDinary.uploader.destroy(usuarioEnSesion.imagen);

                    //Busqueda de usaurio y actualizacion
                    const usuarioUpdate = await Usuario.findOneAndUpdate({
                        email: usuarioEnSesion.email
                    }, {
                        $set: {
                            imagen: publiId,
                            urlImagen: secureURL
                        }
                    });
                    return res.status(200).json({
                        msg: "Imagen subida correctamente a Cloudinary",
                        url: secureURL
                    });
                }
            })
        })
    } catch (e) {
        return res.status(500).json({
            error: "Error en subida de imagen a cloudinary",
            message: e.message
        });
    }
}

export {
    prueba,
    saveImagenCloudinary
}