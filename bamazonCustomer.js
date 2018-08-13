require('dotenv').config();
var mysql = require ('mysql');
var connection = mysql.createConnection(
    {
    host: process.env.host,
    port: process.env.port,
    user: process.env.user,
    password: process.env.password,
    database:process.env.database
    });
var inquirer = require ('inquirer');
connection.connect(function(err){
    if (err) console.log('Connection Failed.');
    console.log('connected'+connection.threadId);
});

connection.query('SELECT item_id, product_name, dept_name, price FROM products', function (err,res){
    if(err) console.log('failed to select query');
    console.log(res);
    connection.end();
});