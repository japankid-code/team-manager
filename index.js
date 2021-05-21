const inquirer = require('inquirer');
const db = require('./db/connection.js');
const cTable = require('console.table');
const { 
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

// basic prompt for inquirer noted out here :)
// inquirer.prompt(questions)
//     .then(answers => {
//       console.log(answers);
//     })
//     .catch(error => {
//       if(error.isTtyError) {
//         // Prompt couldn't be rendered in the current environment
//       } else {
//         // Something else went wrong
//       }
//     });

const inquireBonus = () => {
  console.log("Bonus actions coming soon!!");
}

const inqAddEmployee = (roles, managers) => {
  // use the arrays passed in to list managers and roles during prompt
  console.log(roles, managers);
  questions = [
    {
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
  ]

  let first = 'Jake'; // answers.addEmployeeFirst;
  let last = 'Rankin'; // answers.addEmployeeLast;
  let role = 1; // answers.addEmployeeRole;
  let boss = 2; // answers.addEmployeeManager;
  addEmployee(first, last, role, boss);
  // inquirer.prompt(questions)
  //   .then(answers => {
  //     console.log(answers);
  //     let first = 'first';// answers.addEmployeeFirst;
  //     let last = 'last';// answers.addEmployeeLast;
  //     let role = 'role';// answers.addEmployeeRole;
  //     let boss = 'boss';// answers.addEmployeeManager;
  //     addEmployee(first, last, role, boss)
  //   })
  //   .catch(error => {
  //     if(error.isTtyError) {
  //       // Prompt couldn't be rendered in the current environment
  //     } else {
  //       // Something else went wrong
  //     }
  //   });
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
        'add an employee',
        'add a department',
        'add a role',
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
          renderEmployees();
          break;
        }
        case 'view all departments': {
          renderDepartments();
          break;
        }
        case 'view all roles': {
          renderRoles();
          break;
        }
        case 'add a department': {
          addDepartment();
          break;
        }
        case 'add a role': {
          addRole();
          break;
        }
        case 'add an employee': {
          // need a function to get an arr of roles and an arr of managers
          console.log('add employee?')
          let roles = ['thespian'];// rolesList;
          let managers = ['Mandy'];// managerList;
          inqAddEmployee(roles, managers);
          break;
        }
        case 'update an employee role': {
          updateEmployeeRole();
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