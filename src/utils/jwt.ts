import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const generetedJWT = (id: number, email: string) => {
    try {
        return jwt.sign({
            id: id,
            email: email
        }, process.env.JWT_KEY_SECRET, {
            expiresIn: "1h"
        })
    } catch (e) {
        return new Error("Error en generacion de JWT");
    }
};

export {
    generetedJWT
}

