const addEmployeeQuestions = (roles, managers) => {
  const questions = [
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
      type: 'list',
      name: 'addEmployeeRole',
      message: 'What is the role of this employee?',
      choices: roles
    },
    {
      type: 'list', // query database for the list
      name: 'addEmployeeManager', // query would only grab managers
      message: 'To whom does the employee report?',
      choices: managers
    },
  ]
  return questions;
}

const addDepartmentQuestions = [
  {
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
    }
  }
]

const addRoleQuestions = (departments) => {
  const questions = [
    {
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
      type: 'input',
      name: 'addRoleSalary',
      message: 'What is the projected salary of the role you would like to add?',
      validate: addRoleSalary => {
        if  (addRoleSalary) {
            return true;
        } else {
            console.log('Please enter the role salary amount!');
            return false;
        }
      },
    },
    {
      type: 'list',
      name: 'addRoleDepartment',
      message: 'Which department do you want to add the role to?',
      choices: departments
    }
  ];
  return questions
}

const updateEmpRoleQuestions = (employees, roles) => {
  const questions = [
    {
      type: 'list',
      name: 'employee',
      message: 'which employee would you like to update?',
      choices: employees
    },
    {
      type: 'list',
      name: 'role',
      message: 'which role would you like the employee to have?',
      choices: roles
    }
  ]
  return questions;
}

const actionQuestions = [
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
  }
]

module.exports = { 
  actionQuestions,
  addEmployeeQuestions,
  addDepartmentQuestions,
  addRoleQuestions,
  updateEmpRoleQuestions
};