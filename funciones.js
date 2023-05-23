import { obtenerProductos } from './mysql.js';

const sqlProductos = "SELECT categories.nombre AS category, products.nombre AS product, products.precio FROM categories INNER JOIN products ON categories.id = products.id_Category";
const productos = await obtenerProductos(sqlProductos);
export {productos}






