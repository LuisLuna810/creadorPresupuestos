// Funcion que permite eliminar una Virtual machine 
function del(trNum) {
  const table = document.getElementById('table1');
  if (confirm("¿Estás seguro de que deseas eliminar esta Virtual Machine?")) {
    const tbody = document.querySelector(`.vm${trNum}`);
    table.removeChild(tbody);
    order(table)
  }
}

/*Funcion que se encarga de realizar la cuenta de tables dentro del div */
function count() {
  const table = document.getElementById('table1')
  tr = table.querySelectorAll('tr')
  trLength = tr.length
  return trLength
}

// Funcion que reordena la numeración de las VM
function order(table) {
  var tbody = table.querySelectorAll('tbody'); //contenido del table muestra los tbody  
  let c = 1
  for (let i = 1; i < tbody.length; i++) {
    var getElementsTbody = document.querySelectorAll(`tbody`)[i];
    var getElementTr = getElementsTbody.querySelectorAll(`tr`)[0];
    var getElementTd = getElementTr.querySelectorAll(`td`)[0];
    getElementTd.textContent = `VM ${c++}`;
  }
}
//funcion que genera el select con los datos
function generarSelect(array){
  var select1 = document.createElement('select');
  select1.setAttribute('class', 'form-select');
  array.forEach(element => {
    let option = document.createElement('option');
    option.textContent = JSON.stringify(obtenerNombre(element));
    option.value = JSON.stringify(element);
    select1.appendChild(option);
  })
  return select1;
}
//funcion que filtra el array por categoria
function filtrarPorCategoria(array, categoria) {
  return array.filter(elemento => elemento.category === categoria);
}
//funcion que obtiene un array con los nombres

function obtenerNombre(array){
  let nombres = array.map(elemento => elemento.product);
  return nombres;
}

function addRow(productos) {
  console.log(productos);
  
  const table = document.getElementById('table1')
  trLength = count()

  // Crea una fila y agrega tr con nombre de los campos
  const row2 = document.createElement('tr')
  const tbody = document.createElement('tbody')


  //Agregar opciones para que el usuario elija
  const dato1 = document.createElement('td')
  dato1.className = `td${trLength} m-3 text-center`
  dato1.textContent = `VM ${trLength}`
  row2.appendChild(dato1)



  //fila sistema operativo
  function crearSO(productos) {
      const categoria = filtrarPorCategoria(productos, 'Sistema operativo');
      const dato2 = document.createElement('td')
      const selectSO = generarSelect(categoria);
      dato2.appendChild(selectSO)
      row2.appendChild(dato2)
  }
  crearSO(productos);
}
/*
  const dato2 = document.createElement('td')
  const select2 = document.createElement('select');
  const option21 = document.createElement('option');
  option21.textContent = 'Windows-server2019';
  option21.value = 1
  const option22 = document.createElement('option');
  option22.textContent = 'CentOS-7';
  option22.value = 2
  const option23 = document.createElement('option')
  option23.textContent = 'Ubuntu-20.04'
  option23.value = 3
  select2.appendChild(option21)
  select2.appendChild(option22)
  select2.appendChild(option23)
  select2.setAttribute('class', 'form-select')
  dato2.appendChild(select2)
  row2.appendChild(dato2)

  const dato3 = document.createElement('td')
  const select3 = document.createElement('select');
  const option31 = document.createElement('option');
  option31.textContent = 'Licenza';
  option31.value = 1
  const option32 = document.createElement('option');
  option32.textContent = 'Non licenza';
  option32.value = 2
  select3.appendChild(option31)
  select3.appendChild(option32)
  select3.setAttribute('class', 'form-select')
  dato3.appendChild(select3)
  row2.appendChild(dato3)

  const dato4 = document.createElement('td')
  const select4 = document.createElement('select');
  const option41 = document.createElement('option');
  option41.textContent = '2';
  option41.value = 1
  const option42 = document.createElement('option');
  option42.textContent = '4';
  option42.value = 2
  const option43 = document.createElement('option')
  option43.textContent = '8'
  option43.value = 3
  select4.appendChild(option41)
  select4.appendChild(option42)
  select4.appendChild(option43)
  select4.setAttribute('class', 'form-select')
  dato4.appendChild(select4)
  row2.appendChild(dato4)

  const dato5 = document.createElement('td')
  const select5 = document.createElement('select');
  const option51 = document.createElement('option');
  option51.textContent = '8gb';
  option51.value = 1
  const option52 = document.createElement('option');
  option52.textContent = '16gb';
  option52.value = 2
  const option53 = document.createElement('option')
  option53.textContent = '32gb'
  option53.value = 3
  select5.appendChild(option51)
  select5.appendChild(option52)
  select5.appendChild(option53)
  select5.setAttribute('class', 'form-select')
  dato5.appendChild(select5)
  row2.appendChild(dato5)

  const dato6 = document.createElement('td')
  const select6 = document.createElement('select');
  const option61 = document.createElement('option');
  option61.textContent = '250gb';
  option61.value = 1
  const option62 = document.createElement('option');
  option62.textContent = '500gb';
  option62.value = 2
  const option63 = document.createElement('option')
  option63.textContent = '1TB'
  option63.value = 3
  select6.appendChild(option61)
  select6.appendChild(option62)
  select6.appendChild(option63)
  select6.setAttribute('class', 'form-select')
  dato6.appendChild(select6)
  row2.appendChild(dato6)


  const dato8 = document.createElement('td')
  const select8 = document.createElement('select');
  const option81 = document.createElement('option');
  option81.textContent = 'Diario';
  option81.value = 1
  const option82 = document.createElement('option');
  option82.textContent = 'Semanal';
  option82.value = 2
  select8.appendChild(option81)
  select8.appendChild(option82)
  select8.setAttribute('class', 'form-select')
  dato8.appendChild(select8)
  row2.appendChild(dato8)

  const dato9 = document.createElement('td')
  const select9 = document.createElement('select');
  const option91 = document.createElement('option');
  option91.textContent = '5Mbps';
  option91.value = 1
  const option92 = document.createElement('option');
  option92.textContent = '10Mbps';
  option92.value = 2
  const option93 = document.createElement('option')
  option93.textContent = '20Mbps'
  option93.value = 3
  select9.appendChild(option91)
  select9.appendChild(option92)
  select9.appendChild(option93)
  select9.setAttribute('class', 'form-select')
  dato9.appendChild(select9)
  row2.appendChild(dato9)

  const dato10 = document.createElement('td')
  const select10 = document.createElement('select');
  const option101 = document.createElement('option');
  option101.textContent = '2Mbps';
  option101.value = 1
  const option102 = document.createElement('option');
  option102.textContent = '5Mbps';
  option102.value = 2
  const option103 = document.createElement('option')
  option103.textContent = '10Mbps'
  option103.value = 3
  select10.appendChild(option101)
  select10.appendChild(option102)
  select10.appendChild(option103)
  select10.setAttribute('class', 'form-select')
  dato10.appendChild(select10)
  row2.appendChild(dato10)

  const dato7 = document.createElement('td');
  const btn7 = document.createElement('button');
  const img7 = document.createElement('img');
  img7.setAttribute('style', 'width:1.5rem; height: 1.5rem;');
  img7.setAttribute('src', './resources/lapiz.png');
  img7.setAttribute('alt', 'noteIcon');
  btn7.className = `btn btn-outline-warning btn-${trLength}`
  btn7.setAttribute('onclick', `del(${trLength})`)
  btn7.appendChild(img7);
  dato7.appendChild(btn7);
  dato7.className = 'd-flex justify-content-center'
  row2.appendChild(dato7);

  const dato11 = document.createElement('td');
  const btn = document.createElement('button');
  const img = document.createElement('img');
  img.setAttribute('style', 'width:1.4rem; height: 1.4rem;');
  img.setAttribute('src', './resources/icons8-delete-384.png');
  img.setAttribute('alt', 'deleteIcon');
  btn.className = `btn btn-outline-danger btn-${trLength}`
  btn.setAttribute('onclick', `del(${trLength})`)
  btn.appendChild(img);
  dato11.appendChild(btn);
  row2.appendChild(dato11);

  //Aqui se agrega la fila al tbody 
  tbody.appendChild(row2);
  tbody.className = `vm${trLength}`;
  table.appendChild(tbody);
}*/