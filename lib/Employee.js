// TODO: Write code to define and export the Employee class
export default class Employee {
    constructor(name, id, email, role = 'Employee') {
      // All the properties below will be passed down to the children classes as default properties
      this.name = name;
      this.id = id;
      this.email = email;
      // If the role property is empty when declaring new Intern object
      if (role == '') {
        // Have the role == Employee
        this.role = 'Employee';
      } else {
        // Else have it equal whatever was type in the property
        this.role = role;
      }
    }
  
    // All methods below will return the appropriate data for each child class
    getName() {
      return this.name;
    }
  
    getId() {
      return this.id;
    }
  
    getEmail() {
      return this.email;
    }
  
    getRole() {
      return this.role;
    }
  }
  
  //module.exports = Employee;
