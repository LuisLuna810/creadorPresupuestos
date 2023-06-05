import { obtenerDatos } from './mysql.js';

const sqlProductos = "SELECT categories.nombre AS category, products.nombre AS nombre, products.precio FROM categories INNER JOIN products ON categories.id = products.id_Category";
const productos = await obtenerDatos(sqlProductos);

const sqlCategories = "SELECT nombre FROM categories";
const categorias = await obtenerDatos(sqlCategories);

export {productos, categorias}






