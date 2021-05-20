const db = require('../db/connection');

// view all employees
const renderEmployees = () => {
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
const renderDepartments = () => {
  const sql = `SELECT department_name AS Departments FROM departments;`;
  db.promise().query(sql)
    .then( ([rows,fields]) => {
      console.log(`\n`);
      console.table(rows);
    })
    .catch(console.log)
    .then( () => console.log("anything else?"));
}
// view all roles 
const renderRoles = () => {
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

// add an employee
const addEmployee = (first, last, role, boss) => {
  const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id)
  VALUES (${first}, ${last}, ${role}, ${boss});`;
  db.promise().query(sql)
    .then( ([rows,fields]) => {
      console.log(`\n`);
      console.table(rows);
    })
    .catch(console.log)
    .then( () => console.log("anything else?"));
};

// add a department
const addDepartment = (department) => {
  const sql = `INSERT INTO departments (department_name)
  VALUES (${department});`;
  db.promise().query(sql)
    .then( ([rows,fields]) => {
      console.log(`\n`);
      console.table(rows);
    })
    .catch(console.log)
    .then( () => console.log("anything else?"));
};

// add a role
const addRole = (role, salary, department) => {
  const sql = `INSERT INTO roles (role_title, salary, department_id)
  VALUES (${role}, ${salary}, ${department}),`;
  db.promise().query(sql)
    .then( ([rows,fields]) => {
      console.log(`\n`);
      console.table(rows);
    })
    .catch(console.log)
    .then( () => console.log("anything else?"));
};

// update an employee role
const updateEmployeeRole = () => {
  const sql = `ALTER TABLE employees`;
  db.promise().query(sql)
    .then( ([rows,fields]) => {
      console.log(`\n`);
      console.table(rows);
    })
    .catch(console.log)
    .then( () => console.log("anything else?"));
};

module.exports = { 
  renderDepartments,
  renderRoles,
  renderEmployees,
  addEmployee,
  addDepartment,
  addRole,
  updateEmployeeRole
};