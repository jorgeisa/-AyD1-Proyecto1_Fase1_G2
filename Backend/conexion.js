const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: '34.94.61.196',
    user: 'root',
    password: 'password',
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