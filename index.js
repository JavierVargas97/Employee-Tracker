const inquirer = require('inquirer');
const mysql = require('mysql2');
const { printTable } = require('console-table-printer');


const db = mysql.createConnection(
  {

    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'employees_db'

  });

db.connect(function (err){
    if (err) throw err;
    firstPrompt ();
});

// inquirer
//   .prompt([
//     /* Pass your questions in here */
//   ])
//   .then((answers) => {
//     // Use user feedback for... whatever!!
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });