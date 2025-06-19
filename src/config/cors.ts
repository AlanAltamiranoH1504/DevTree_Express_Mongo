import {CorsOptions} from "cors";
import dotenv from "dotenv";
dotenv.config();

export const corsConfig: CorsOptions = {
    origin: process.env.CORS_ORIGIN
}