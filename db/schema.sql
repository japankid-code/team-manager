DROP DATABASE IF EXISTS teams;
CREATE DATABASE teams;
USE teams;
DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS departments;

CREATE TABLE departments (
  d_id INTEGER AUTO_INCREMENT PRIMARY KEY,
  department_name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
  r_id INTEGER AUTO_INCREMENT PRIMARY KEY,
  role_title VARCHAR(30) NOT NULL,
  salary INTEGER NOT NULL,
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES departments(d_id) ON DELETE SET NULL
);

CREATE TABLE employees (
  e_id INTEGER AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT,
  FOREIGN KEY (role_id) REFERENCES roles(r_id) ON DELETE SET NULL,
  manager_id INT,
  CONSTRAINT fk_boss FOREIGN KEY (manager_id) REFERENCES employees(e_id) ON DELETE SET NULL
);