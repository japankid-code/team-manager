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
  },
  
  {
    when: ({ action }) => {
      if (action === 'add a role') {return true} else {return false}
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

module.exports = { actionQuestions, addEmployeeQuestions, addDepartmentQuestions };