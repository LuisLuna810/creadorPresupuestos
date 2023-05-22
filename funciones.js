import { obtenerProductos } from './mysql.js';

/*Funcion que se encarga de realizar la cuenta de tables dentro del div */
function count() {
  const table = document.getElementById('table1')
  tr = table.querySelectorAll('tr')
  trLength = tr.length
  return trLength
}

const sqlProductos = "SELECT categories.nombre AS category, products.nombre AS product, products.precio FROM categories INNER JOIN products ON categories.id = products.id_Category";
const productos = await obtenerProductos(sqlProductos);
export {productos}

function filtrarPorCategoria(array, categoria) {
  return array.filter(elemento => elemento.category === categoria);
}

function obtenerNombre(array){
  let nombres = array.map(elemento => elemento.product);
  return nombres;
}


//const SO = productos;
const SO = filtrarPorCategoria(productos, "Sistema operativo");
//console.log(SO);
//console.log(obtenerNombre(SO));




