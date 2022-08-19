const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');

//This is the information for sql database.
const dataBase = mysql.createConnection({

    host: 'Localhost',
    port: 3306,
    user: 'root',
    password: 'Password',
    database: 'employee_db'

});
//This connect sql to server and database
dataBase.connect(function (err) {
    if (err) throw err;
    console.log("====================");
    console.log("SQL is now connected");
    console.log("====================");

    //Start function
    Start();
});
const Start = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'mainMenu',
            message: 'Please select the option you want to use.',
            choices: ['View All Employees', 'View All Departments', 'View All Roles', 'Exit']
        },
    ])

        .then(answer => {
            if (answer.mainMenu === 'View All Employees') {
                viewAllEmployees();
            }
            else if (answer.mainMenu === 'View All Departments') {
                viewAllDepartments();
            }
            else if (answer.mainMenu === 'View All Roles') {
                viewAllRoles();
            }
            else if (answer.mainMenu === 'Exit') {
                dataBase.end();
            }
        })

    function viewAllEmployees() {
        console.log('=================');
        console.log('This is the team!');
        console.log('=================');
        dataBase.query(`SELECT id, first_name, last_name, role_id FROM employee_db.employees;`,
            function (err, res) {
                if (err) throw err;
                console.table(res);
                Start();
            });

    }
}