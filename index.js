const inquirer = require('inquirer');
const mysql = require('mysql2');
const { printTable } = require('console-table-printer');
const { default: Choice } = require('inquirer/lib/objects/choice');
const { default: Choices } = require('inquirer/lib/objects/choices');

        //This is the information for sql database.
const db = mysql.createConnection({

    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'employees_db'

    });
            //This connect sql to server and database
db.connect(function(err){
    if (err) throw err;
    console.log("SQL now is connected");
    
    //Start function
    start();
    });
            
        //Application questions 
function start() {
    inquirer
    .prompt([{
            type: "list",
            name: "start",
            message: "Please select the information of departments, employees and roles",
            choices: ["View", "Add", "Update", "Exit"]
        }

    ]).then (function(res){
        switch(res.start){
            case "View":
                view(); 
                break;
            case "Add":
                add();
                break;
            case "Update":
                updateEmloyee();
                break;
            case "Exit":
                console.log("It's Done")
                break;
            default:
                console.log("default");
        }
    });
