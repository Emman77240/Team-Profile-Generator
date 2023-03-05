// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('../lib/Employee.js');


class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    // Rather than doing this.name, this.id, etc. for all classes, we can just use the default properties from the
    // Employee class which contains properties that are valid for all other classes
    super(name, id, email);
    
    // The below property is unique to this class so we'll assign it from here
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  // Override the default role (if a new role is assigned)
  getRole() {
    // Call parent class to access role method
    return this.role = "Manager";
    
    
  }
}

module.exports = Manager;