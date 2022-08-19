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
    start();
});

//Application questions start
const start = () => {
    inquirer.
        prompt([{
            type: 'list',
            name: 'MenuSelect',
            message: 'Please select the option you want to use.',
            choices:
                ["View All Employees?",
                    "View All Employee's By Roles?",
                    "View all Emplyees By Deparments",
                    "Exit"
                ]
        }

        ]).then(optionSelect => {
            if (optionSelect.MenuSelect === 'View All Employees') {
                OptionEmployees();
            }
            else if (optionSelect.MenuSelect === 'View All Employees by role') {
                OptionRole();

            } else if (optionSelect.MenuSelect === 'View All Employees by Departments') {
                OptionDepartments();

            } else if (optionSelect.MenuSelect === 'Exit') {
                dataBase.end();
            }
        })

}