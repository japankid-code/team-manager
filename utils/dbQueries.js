const db = require('../db/connection');

const employeeList = () => {
  const sql = 'SELECT e_id, first_name, last_name FROM employees;';
  return db.promise().query(sql).catch(err => console.log(err));
}

const departmentList = () => {
  const sql = `SELECT d_id, department_name FROM departments`
  return db.promise().query(sql).catch(err => console.log(err));
}

const rolesList = () => {
  const sql = `SELECT r_id, role_title FROM roles`;
  return db.promise().query(sql).catch(err => console.log(err));
}

const managerList = () => {
  const sql = `SELECT DISTINCT
  m.e_id,
  m.first_name,
  m.last_name
FROM employees e
JOIN employees m
ON e.manager_id = m.e_id;`;
  return db.promise().query(sql).catch(err => console.log(err));
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
    .catch(err => console.log(err))
}

// view all departments
const renderDepartments = () => {
  const sql = `SELECT department_name AS Departments FROM departments;`;
  db.promise().query(sql)
    .then( ([rows,fields]) => {
      console.log(`\n`);
      console.table(rows);
    })
    .catch(err => console.log(err))
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
    .catch(err => console.log(err))
}

// add an employee
const addEmployee = (first, last, role, boss) => {
  const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES 
  ('${first}', '${last}', ${role}, ${boss});`;
  db.promise().query(sql)
    .then( ([rows,fields]) => console.log('Employee added!'))
    .catch(err => console.log(err))
};

// add a department
const addDepartment = (department) => {
  const sql = `INSERT INTO departments (department_name)
  VALUES ('${department}');`;
  db.promise().query(sql)
    .then( ([rows,fields]) => console.log('Department added!'))
    .catch(err => console.log(err))
};

// add a role
const addRole = (title, salary, department) => {
  const sql = `INSERT INTO roles (role_title, salary, department_id)
  VALUES ('${title}', ${salary}, ${department});`;
  db.promise().query(sql)
    .then( ([rows,fields]) => console.log(`Role added!`))
    .catch(err => console.log(err))
};

// update an employee role
const updateEmployeeRole = (id, role) => {
  const sql = `UPDATE employees
SET role_id = ${role}
WHERE e_id = ${id}`;
  db.promise().query(sql)
    .then( ([rows,fields]) => console.log('Employeed role updated!'))
    .catch(err => console.log(err))
};

module.exports = {
  employeeList,
  departmentList,
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