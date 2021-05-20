const inquirer = require('inquirer');
const db = require('./db/connection.js');
const cTable = require('console.table');
const { 
  getDepartments,
  getRoles,
  getEmployees,
} = require('./utils/dbQueries');

const inquireBonus = () => {
  console.log("Bonus actions coming soon!!")
}

const inquire = () => {
  
  const questions = [
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: [
        'view all employees',
        'view all departments',
        'view all roles',
        'add a department',
        'add a role',
        'add an employee',
        'update an employee role',
        'advanced options',
        'quit'
      ]
    },
    {
      when: ({ action }) => {
        if (action === 'add a department') {
          return true;
        } else {
          return false;
        }
      },
      type: 'input',
      name: 'addDepartment',
      message: 'What is the name of the department you want to add?',
      validate: addDepartment => {
        if  (addDepartment) {
            return true;
        } else {
            console.log('Please enter the department name!');
            return false;
        }
      },
    },
    {
      when: ({ action }) => {
        if (action === 'add a role') {
          return true;
        } else {
          return false;
        }
      },
      type: 'input',
      name: 'addRoleTitle',
      message: 'What is the title of the role you would like to add?',
      validate: addRoleTitle => {
        if  (addRoleTitle) {
            return true;
        } else {
            console.log('Please enter the role title!');
            return false;
        }
      },
    },
      {
        when: ({ addRoleTitle }) => {
          if (addRoleTitle) {
            return true;
          } else {
            return false;
          }
        },
        type: 'input',
        name: 'addRoleSalary',
        message: 'What is the projected salary of the role you would like to add?',
        validate: addRoleSalary => {
          if  (addRoleSalary && typeof addRoleTitle === 'number') {
              return true;
          } else {
              console.log('Please enter the role salary amount!');
              return false;
          }
        },
      },
    {
      when: ({ action }) => {
        if (action === 'add an employee') {
          return true;
        } else {
          return false;
        }
      },
      type: 'input',
      name: 'addEmployeeFirst',
      message: 'What is the first name of the employee you would like to add?',
      validate: addEmployeeFirst => {
        if  (addEmployeeFirst) {
            return true;
        } else {
            console.log("Please enter the employee's first name!");
            return false;
        }
      },
    },
      {
        when: ({ addEmployeeFirst }) => {
          if (addEmployeeFirst) {
            return true;
          } else {
            return false;
          }
        },
        type: 'input',
        name: 'addEmployeeLast',
        message: 'What is the last name of the employee you would like to add?',
        validate: addEmployeeLast => {
          if  (addEmployeeLast) {
              return true;
          } else {
              console.log("Please enter the employee's last name!");
              return false;
          }
        },
      },
      {
        when: ({ addEmployeeLast }) => {
          if (addEmployeeLast) {
            return true;
          } else {
            return false;
          }
        },
        type: 'input',
        name: 'addEmployeeRole',
        message: 'What is the role of this employee?',
        validate: addEmployeeRole => {
          if  (addEmployeeRole) {
              return true;
          } else {
              console.log("Please enter the employee's role!");
              return false;
          }
        },
      },
      {
        when: ({ addEmployeeRole }) => {
          if (addEmployeeRole) {
            return true;
          } else {
            return false;
          }
        },
        type: 'input', // this could be list, query database for the list
        name: 'addEmployeeManager', // query would only grab managers
        message: 'To whom does the employee report?',
        validate: addEmployeeManager => {
          if  (addEmployeeManager) {
              return true;
          } else {
              console.log("Please enter the employee's manager!");
              return false;
          }
        },
      },
    {
      type: 'input', // this could be list, query database for the list
      name: 'updateEmployeeRole',
      message: 'What is the name of the employee whose role you would like to update?',
      when: ({ action }) => {
        if (action === 'update an employee role') {
          return true;
        } else {
          return false;
        }
      },
      validate: updateEmployeeRole => {
        if  (updateEmployeeRole) {
            return true;
        } else {
            console.log('Please enter the employee title!');
            return false;
        }
      },
    },
  ]

  inquirer.prompt(questions)
    .then(answers => {
      console.log(answers)
      
      // use feedbacks here in the switch
      switch(answers.action) {
        case 'view all employees': {
          getEmployees();
          break;
        }
        case 'view all departments': {
          getDepartments();
          break;
        }
        case 'view all roles': {
          getRoles();
          break;
        }
        case 'add a department': {
          break;
        }
        case 'add a role': {
          break;
        }
        case 'add an employee': {
          break;
        }
        case 'update an employee role': {
          break;
        }
        case 'advanced options': {
          inquireBonus();
          break;
        }
        case 'quit': {
          process.exit()
        }
      }
      inquire();
    })
    .catch(error => {
      if(error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}

console.log(`Welcome to the Team Manager !!`);
inquire();