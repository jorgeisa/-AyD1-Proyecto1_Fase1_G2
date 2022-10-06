const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root123',
    database: 'fase2'
});

mysqlConnection.connect(function(err){
    if(err){
        console.log(err)
        return
    }else{
        console.log('db connected')
    }
});

module.exports = mysqlConnection;