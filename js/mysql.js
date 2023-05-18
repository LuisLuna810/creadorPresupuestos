const mysql = require('mysql');

const conection = mysql.createConnection(
    {
        host : 'localhost',
        user : 'root',
        password : '',
        database : 'formulario'
    }
);

conection.connect( (err) =>{
    if (err) throw err;
    console.log('La conexion funciona');
})

// Mostrar productos que pertenecen a cierta categoria
conection.query('SELECT * from products' , (err, rows) =>{
    if(err) throw err;
    console.log('Response');
    console.log(rows[0].precio);
})


// Finaliza la conexion
conection.end( (end)=>{
    if(end) throw end;
    console.log('La conexion se cerro');
})