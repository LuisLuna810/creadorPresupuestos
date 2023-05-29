//Funcion de carga de pagina
function cargaPagina(array) {
  addRow(array);
  sessionStorage.setItem('productos', JSON.stringify(array));
}

//Funcion de crear nueva fila con los datos
function crearNueva() {
  const productos = JSON.parse(sessionStorage.getItem('productos'));
  addRow(productos);
}

// Funcion que permite eliminar una Virtual machine 
function del(clase) {
  const table = document.getElementById('table1');
  if (confirm("¿Estás seguro de que deseas eliminar esta Virtual Machine?")) {
    const tbody = table.querySelector(clase);
    table.removeChild(tbody);
    order(table)
  }
}

//Funcion que se encarga de realizar la cuenta de tables dentro del div 
function count() {
  const table = document.getElementById('table1')
  tr = table.querySelectorAll('tr')
  nFilas = tr.length
  return nFilas
}

// Funcion que reordena la numeración de las VM
function order(table) {
  var tbody = table.querySelectorAll('tbody'); //contenido del table muestra los tbody  
  for (let i = 1; i < tbody.length; i++) {
    var getElementsTbody = document.querySelectorAll(`tbody`)[i];
    var getElementTr = getElementsTbody.querySelectorAll(`tr`)[0];
    var getElementTd = getElementTr.querySelectorAll(`td`)[0];
    getElementTd.textContent = `VM ${i}`;
  }
}

//funcion que genera el select con los datos
function generarSelect(array) {
  var select1 = document.createElement('select');
  select1.setAttribute('class', 'form-select');
  nombres = obtenerNombre(array);
  nombres.forEach(element => {
    let option = document.createElement('option');
    option.textContent = element;
    option.value = element;
    select1.appendChild(option);
  })
  return select1;
}

//funcion que filtra el array por categoria
function filtrarPorCategoria(array, categoria) {
  return array.filter(elemento => elemento.category === categoria);
}

//funcion que obtiene un array con los nombres
function obtenerNombre(array) {
  let nombres = array.map(elemento => elemento.product);
  return nombres;
}

//funcion que crea una columna de la fila
function crearColumna(productos, nombreCategoria) {
  const columna = document.createElement('td')
  const categoria = filtrarPorCategoria(productos, nombreCategoria);
  const selectSO = generarSelect(categoria);
  columna.appendChild(selectSO)
  return columna;
}

//Funcion que asigna clases a las filas
function asignarClaseFila() {
  var newTr = count();
  //Este while se asegura de no asignarle la misma clase a 2 filas distintas
  while (document.querySelector(`.vm${newTr}`) != null) {
    newTr++;
  }
  let clase = 'vm' + newTr;
  return clase;
}

//Funcion que identifica la fila (EJ: "VM1")
function identificarFila() {
  const columna = document.createElement('td');
  columna.className = `td${nFilas} m-3 text-center`;
  columna.textContent = `VM ${nFilas}`;
  return columna;
}

//Funcion que crea en la columna un boton de añadir nota
function crearBotonNota() {
  const columna = document.createElement('td');
  const boton = document.createElement('button');
  const img = document.createElement('img');
  img.setAttribute('style', 'width:1.5rem; height: 1.5rem;');
  img.setAttribute('src', './resources/lapiz.png');
  img.setAttribute('alt', 'noteIcon');
  boton.className = `btn btn-outline-warning btn-${nFilas}`
  boton.setAttribute('onclick', `del("${nFilas}")`) //--------------> asi no va, le toca a payo arreglar esta mieeerrrrrda (Tremenda poronga hizo) (8===D)
  boton.appendChild(img);
  columna.appendChild(boton);
  columna.className = 'd-flex justify-content-center'
  return columna
}

//Funcion que crea en la columna un boton de borrar fila
function crearBotonBorrar() {
  const columna = document.createElement('td');
  const boton = document.createElement('button');
  const img = document.createElement('img');
  img.setAttribute('style', 'width:1.4rem; height: 1.4rem;');
  img.setAttribute('src', './resources/bote-de-basura.png');
  img.setAttribute('alt', 'deleteIcon');
  boton.className = `btn btn-outline-danger btn-${nFilas}`
  const clase = asignarClaseFila();
  boton.setAttribute('onclick', `del('.${clase}')`)
  boton.appendChild(img);
  columna.appendChild(boton);
  return columna;
}

//Funcion que crea las columnas de la tabla
function crearColumnas(array) {
  let columna = document.createElement('tr');

  columna.appendChild(identificarFila());
  columna.appendChild(crearColumna(array, 'Sistema operativo'));
  columna.appendChild(crearColumna(array, 'licencia'));
  columna.appendChild(crearColumna(array, 'numero de cpu'));
  columna.appendChild(crearColumna(array, 'memoria ram'));
  columna.appendChild(crearColumna(array, 'disco rigido'));
  columna.appendChild(crearColumna(array, 'backup'));
  columna.appendChild(crearColumna(array, 'subida'));
  columna.appendChild(crearColumna(array, 'bajada'));
  columna.appendChild(crearBotonNota());
  columna.appendChild(crearBotonBorrar());
  return columna;
}

//Funcion que añade una fila
function addRow(productos) {
  //Tomar tabla del Dom y numero de filas
  const table = document.getElementById('table1')
  nFilas = count()

  // Crea una fila y agrega tr con nombre de los campos
  const tbody = document.createElement('tbody')
  tbody.className = asignarClaseFila();
  const columnas = crearColumnas(productos);

  tbody.appendChild(columnas);
  table.appendChild(tbody);
}


function almacenarDatos() {
    var datos = [];
    
  tbodyLength = count();
  for (let i = 1; i < tbodyLength; i++) {
    var tbody = document.querySelector(`.vm${i}`);
    var dato = {
      vm: tbody.querySelector("td:nth-child(1)").textContent,
      so: tbody.querySelector("td:nth-child(2) select").value,
      licencia: tbody.querySelector("td:nth-child(3) select").value,
      cpu: tbody.querySelector("td:nth-child(4) select").value,
      ram: tbody.querySelector("td:nth-child(5) select").value,
      dr: tbody.querySelector("td:nth-child(6) select").value,
      backup: tbody.querySelector("td:nth-child(7) select").value,
      subida: tbody.querySelector("td:nth-child(8) select").value,
      bajada: tbody.querySelector("td:nth-child(9) select").value
    };
    datos.push(dato); 
    
  } 
  datosJSON = JSON.stringify(datos);
  console.log(datosJSON.vm);
  //localStorage.setItem('datosPresupuesto', datosJSON);
}