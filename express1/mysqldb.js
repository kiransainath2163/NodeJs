const mysql = require('mysql2')
const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'kdl43w800c',
    database:'plsdb'
})

module.exports=pool.promise();