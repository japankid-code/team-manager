const db = require('../db/connection');

// view all employees
const getEmployees = () => {
  const sql = `SELECT
  e.first_name AS 'First',
  e.last_name AS 'Last',
  d.department_name AS 'Department',
  r.role_title AS 'Role',
  r.salary
FROM employees AS e
LEFT JOIN roles r
ON e.role_id = r.r_id
LEFT JOIN departments d
on r.department_id = d.d_id;`;
  db.promise().query(sql)
    .then( ([rows,fields]) => {
      console.log(`\n`);
      console.table(rows);
    })
    .catch(console.log)
    .then( () => console.log("anything else?"));
}

// view all departments
const getDepartments = () => {
  const sql = `SELECT department_name AS departments FROM departments;`;
  db.promise().query(sql)
    .then( ([rows,fields]) => {
      console.log(`\n`);
      console.table(rows);
    })
    .catch(console.log)
    .then( () => console.log("anything else?"));
}
// view all roles 
const getRoles = () => {
  const sql = `SELECT
  r.role_title AS Title,
  r.salary AS Salary,
  d.department_name AS Department
FROM roles r
LEFT JOIN departments d
on r.department_id = d.d_id;`;
  db.promise().query(sql)
    .then( ([rows,fields]) => {
      console.log(`\n`);
      console.table(rows);
    })
    .catch(console.log)
    .then( () => console.log("anything else?"));
}

module.exports = { getDepartments, getRoles, getEmployees };