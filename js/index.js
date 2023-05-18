

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

function count(){
  const div = document.getElementById('tab1')
  table = div.querySelectorAll('table')
  tableLength = table.length
  return tableLength
}


/*Agregar filas */

function addRow(){


  const div = document.getElementById('tab1')
  tableLength = count()
  
  // Crea una fila y agrega tr con nombre de los campos
const row1 = document.createElement('tr')
const row2 = document.createElement('tr')
const tbody = document.createElement('tbody')
const table = document.createElement('table')


const col1 = document.createElement('td')
col1.textContent = 'Virtual machine'
const col2 = document.createElement('td')
col2.textContent = 'Sistema operativo' 
const col3 = document.createElement('td')
col3.textContent = 'Licenza'
const col4 = document.createElement('td')
col4.textContent = 'Numero di CPU' 
const col5 = document.createElement('td')
col5.textContent = 'Memoria RAM' 
const col6 = document.createElement('td')
col6.textContent = 'Disco Rigido'
const col7 = document.createElement('td')
col7.textContent = 'Descrizione del software' 
const col8 = document.createElement('td')
col8.textContent = 'Sistema di Backup'
const col9 = document.createElement('td')
col9.textContent = 'Consumo di rete (Ingresso)' 
const col10 = document.createElement('td')
col10.textContent = 'Consumo di rete Uscita' 

/*Este for se encarga de agregar todo los td a la fila*/
for (let i = 1; i < 11; i++) {
  let col = eval('col' + i)
  row1.appendChild(col)
}

/*Agregar opciones para que el usuario elija*/
const dato1 = document.createElement('td')
dato1.textContent = `VM ${tableLength+1}`
dato1.setAttribute('class', 'contador')
row2.appendChild(dato1)

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
dato6.appendChild(select6)
row2.appendChild(dato6)

const dato7 = document.createElement('td')
const select7 = document.createElement('input');
dato7.setAttribute('type', 'text')
dato7.appendChild(select7)
row2.appendChild(dato7)

const dato8 = document.createElement('td')
const select8 = document.createElement('select');
const option81 = document.createElement('option');
option81.textContent = 'Giornaliero';
option81.value = 1
const option82 = document.createElement('option');
option82.textContent = 'Settimanale';
option82.value = 2
select8.appendChild(option81)
select8.appendChild(option82)
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
dato10.appendChild(select10)
row2.appendChild(dato10)



/*Aqui se agrega la fila al tbody */
tbody.appendChild(row1)
tbody.appendChild(row2)
table.appendChild(tbody)
table.className = `table${tableLength+1}`
div.appendChild(table)






}

