const mysql = require ('./node_modules/mysql');

//Conexión a la base de datos 
const mysqlConnection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'ale123',
    database: 'sistematodo'
});
mysqlConnection.connect(function (err){
    if(err){
        console.log(err);
        return;
    }else{
        console.log('DB is connected');
    }
});

module.exports= mysqlConnection;