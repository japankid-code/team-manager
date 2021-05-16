const db = require('../db/connection');


// view all departments
const getDepartments = () => {
  const sql = '';
}
// view all roles 
const getRoles = () => {
  const sql = '';
}
// view all employees
const getEmployees = () => {
  const sql = `SELECT
  e.first_name,
  e.last_name,
  d.department_name,
  r.role_title,
  r.salary
FROM employees AS e
LEFT JOIN roles r
ON e.role_id = r.r_id
LEFT JOIN departments d
on r.department_id = d.d_id;`;
  db.promise().query(sql)
    .then( ([rows,fields]) => {
      console.table(rows);
    })
    .catch(console.log)
    .then( () => db.end());
}

module.exports = { getDepartments, getRoles, getEmployees };