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

        .then(SelectMenu => {
            if (SelectMenu.mainMenu === 'View All Employees') {
                viewAllEmployees();
            }
            else if (SelectMenu.mainMenu === 'View All Departments') {
                viewAllDepartments();
            }
            else if (SelectMenu.mainMenu === 'View All Roles') {
                viewAllRoles();
            }
            else if (SelectMenu.mainMenu === 'Exit') {
                console.log('=========')
                console.log('All set, thanks for using')
                console.log('=========')
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

function viewAllDepartments() {
    console.log('=================');
    console.log('This are the departments!');
    console.log('=================');
    dataBase.query(`SELECT id, name FROM employee_db.department;`,
        function (err, res) {
            if (err) throw err;
            console.table(res);
            Start();
        });
}



function viewAllRoles() {
    console.log('=================');
    console.log('This are the roles!');
    console.log('=================');
    dataBase.query(`SELECT 
    role.id AS ID,
    role.title AS Title,
    role.salary AS Salary,
    department.name AS Department
    FROM role
    LEFT JOIN department ON role.department_id = department.id;`,
        function (err, res) {
            if (err) throw err;
            console.table(res);
            Start();
        });
}
