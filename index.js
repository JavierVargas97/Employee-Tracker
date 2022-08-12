const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require("console.table");

        //This is the information for sql database.
const db = mysql.createConnection({

    host: 'Localhost',
    port: 3306,
    user: 'root',
    password: 'Kromina123',
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
}

        //View Questions
function view(){
    inquirer
    .prompt([{
            type: "list",
            name: "view",
            message: "Select one option for see content",
            choices: ["All employees", "Departments", "Roles"]
        }

    ]).then (function(res){
        switch(res.view){
            case "All Employees":
                ViewAllEmployees(); 
                break;
            case "Departments":
                ViewDepartemts();
                break;
            case "Roles":
                ViewAllRoles();
                break;
            default: console.log("default");
        }
    });
}

        // Role Questions
function role(){
    db.query("Select one name from role", function(err, results){
        if(err) throw err;
        inquirer
            .prompt([
                {
                    name: "choice",
                    type: "rawlist",
                    choices: function(){
                        var choiceArr = [];
                        for(i=0; i< results.length; i++){
                            choiceArr.push(results[i].title);
                        }
                        return choiceArr;
                    },
                    message: "Select role"
                }
            ]).then(function(answer){
                console.log(answer.choice);
                db.query(
                    "SELECT e.id AS ID, e.first_name AS First, e.last_name AS LAST, e.ROLE_id, r.salary AS Salary, M.last_name AS Manager, d.name AS Department FROM employee e LEFT JOIN employee m ON e.manager_id = m.id LEFT JOIN role r ON e.role_id = r.title LEFT JOIN department d ON  r.department_id = d.id WHERE e.role_id = ?", [answer.choice], function(err, results){
                        if(err)  throw err;
                        console.table(results);
                        start();
                    }
                    
                )
            });
    });
}













