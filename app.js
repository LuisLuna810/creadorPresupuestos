import express from "express";
import { productos } from "./funciones.js";


//cra una express app
const app = express();

app.listen(5500, () => {
    console.log('server running in port 5500');
})

//configuracion de EJS
app.set('views', "./views");
app.set('view engine', 'ejs')

//configuracion de archivos estaticos
app.use(express.static('views'));
app.use(express.static('resources'));

app.get("/", (req, res) => {
    res.render('index', {
        productos,
    })
})

