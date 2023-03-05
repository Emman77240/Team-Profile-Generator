// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
      // All the properties below will be passed down to the children classes as default properties
      this.name = name;
      this.id = id;
      this.email = email;
      this.role = "Employee";
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
  
  module.exports = Employee;
