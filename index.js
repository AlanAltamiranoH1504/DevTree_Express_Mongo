import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const puerto = process.env.PORT || 5000

app.get("/", (req, res) => {
    res.render("index");
})

app.listen(puerto, () => {
    console.log("Servidor corriendo en el puerto: " + puerto);
});