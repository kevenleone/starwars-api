var mysql = require('mysql')

var conn = function(){
    return mysql.createConnection({
        port: 3306,
        host: 'localhost',
        database: 'starwars',
        password: '',
        user: 'root'
    })
}

module.exports = function(){
    return conn

}