const inquirer = require('inquirer');
const mysql = require('mysql2');
const { printTable } = require('console-table-printer');
const cTable = require('console.table');

//This is the information for sql database.
const dataBase = mysql.createConnection({

    host: 'Localhost',
    port: 3306,
    user: 'sqluser',
    password: 'password',
    database: 'employee_db'

});
//This connect sql to server and database
dataBase.connect(function (err) {
    if (err) throw err;
    console.log("====================");
    console.log("SQL is now connected");
    console.log("====================");

    //Start function
    // start();
});

//Application questions start
