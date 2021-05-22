const db = require('../db/connection');

const rolesList = () => {
  const sql = `SELECT r_id, role_title FROM roles`;
  return db.promise().query(sql)
}

const managerList = () => {
  const sql = `SELECT DISTINCT
  m.e_id,
  m.first_name,
  m.last_name
FROM employees e
JOIN employees m
ON e.manager_id = m.e_id;`;
  return db.promise().query(sql);
}

// view all employees
const renderEmployees = () => {
  const sql = `SELECT
  e.e_id AS ID,
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
VALUES 
  ('${first}', '${last}', ${role}, ${boss});`;
  db.promise().query(sql)
    .then( ([rows,fields]) => console.log('employee added!'))
    .catch(err => console.log(err))
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
  rolesList,
  managerList,
  renderDepartments,
  renderRoles,
  renderEmployees,
  addEmployee,
  addDepartment,
  addRole,
  updateEmployeeRole
};