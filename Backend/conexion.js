/**const mysql = require('mysql');

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
**/

var mysql = require('mysql');
var mysqlConnection  = mysql.createPool({
  connectionLimit : 100,
  waitForConnections : true,
    queueLimit :0,
  host            : '34.94.61.196',
  user            : 'root',
  password        : 'password',
  database : 'fase2'
});



module.exports = mysqlConnection;