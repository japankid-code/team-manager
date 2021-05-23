const inquirer = require('inquirer');
const cTable = require('console.table');
const { 
  actionQuestions,
  addEmployeeQuestions,
  addDepartmentQuestions,
  addRoleQuestions,
  updateEmpRoleQuestions
} = require('./utils/questions');

const {
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
} = require('./utils/dbQueries');

const inquireBonus = () => {
  console.log("Bonus actions coming soon!!");
  inquireAction();
}

const inqAddEmployee = (roles, managers) => {
  const questions = addEmployeeQuestions(roles, managers)
  // use the arrays passed in to list managers and roles during prompt
  inquirer.prompt(questions)
    .then(answers => {
      const first = answers.addEmployeeFirst;
      const last = answers.addEmployeeLast;
      // split  and parse to get the id from user choice
      const role = parseInt(answers.addEmployeeRole.split("|")[0].trim());
      // split to get the id from user choice
      const boss = parseInt(answers.addEmployeeManager.split("|")[0].trim());
      addEmployee(first, last, role, boss);
      inquireAction();
    })
    .catch(error => {
      if(error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } {
        // Something went wrong
      }
    });
}

const inqAddDepartment = () => {
  inquirer.prompt(addDepartmentQuestions)
    .then(answers => {
      const depName = answers.addDepartment;
      addDepartment(depName);
      inquireAction();
    })
}

const inqAddRole = (departments) => {
  const questions = addRoleQuestions(departments);
  inquirer.prompt(questions)
    .then(answers => {
      const title = answers.addRoleTitle;
      const salary =  answers.addRoleSalary;
      const department = parseInt(answers.addRoleDepartment.split("|")[0].trim());
      addRole(title, salary, department);
      inquireAction();
    })
}

const inqUpdateEmpRole = (employees, roles) => {
  const questions = updateEmpRoleQuestions(employees, roles);
  inquirer.prompt(questions)
    .then(answers => {
      const employee = parseInt(answers.employee.split("|")[0].trim());
      const role = parseInt(answers.role.split("|")[0].trim());
      updateEmployeeRole(employee, role);
      inquireAction();
    })
}

const inquireAction = () => {
  // primary prompt for database interaction
  inquirer.prompt(actionQuestions)
    .then(async (answers) => {      
      const rolesQuery = await rolesList();
      const roles = rolesQuery[0].map((row) => {
        return `${row.r_id} | ${row.role_title}`;
      })
      const managerQuery = await managerList();
      const managers = managerQuery[0].map((row) => {
        return `${row.e_id} | ${row.first_name} ${row.last_name}`;
      })
      const departmentQuery = await departmentList();
      const departments = departmentQuery[0].map((row) => {
        return `${row.d_id} | ${row.department_name}`;
      })
      const employeeQuery = await employeeList();
      const employees = employeeQuery[0].map((row) => {
        return `${row.e_id} | ${row.first_name} ${row.last_name}`
      })
      switch (answers.action) {
        case 'view all employees': 
          renderEmployees();
          inquireAction();
          break;
        case 'view all departments':
          renderDepartments();
          inquireAction();
          break;
        case 'view all roles':
          renderRoles();
          inquireAction();
          break;
        case 'add an employee':
          // need a function to get an arr of roles and an arr of managers
          inqAddEmployee(roles, managers);
          break;
        case 'add a department': 
          inqAddDepartment();
          break;
        case 'add a role':
          // grab list of departments with query and
          inqAddRole(departments);
          break;
        case 'update an employee role': 
          // get list of employess  etc.
          inqUpdateEmpRole(employees, roles);
          break;
        case 'advanced options':
          inquireBonus();
          inquire();
          break;
        case 'quit':
          process.exit();
      }
    })
    .catch(error => {
      if(error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } {
        // Something went wrong
      }
    });
}

const init = () => {
  console.log(`Welcome to the Team Manager !!`);
  inquireAction();
}

init();

module.exports = inquireAction;
