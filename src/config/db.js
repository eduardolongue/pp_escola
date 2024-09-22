const mysql = require('mysql2');

//acesso ao arquivo dotenv
const env = require('dotenv').config();

//uma função para conectar com o banco utilizando as chaves do arquivo .env
const connection = mysql.createConnection({
    //acessando o db_host, user, passwor e database
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

connection.connect((err) =>{
    if(err) {
        throw err;
    } else {
        console.log('Mysql connected');
    }
});

module.exports = connection;