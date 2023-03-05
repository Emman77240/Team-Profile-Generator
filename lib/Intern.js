// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
import Employee from '../lib/Employee.js';

export default class Intern extends Employee {
  constructor(name, id, email, school) {
    // Rather than doing this.name, this.id, etc. for all classes, we can just use the default properties from the
    // Employee class which contains properties that are valid for all other classes
    super(name, id, email);
    
    // The below property is unique to this class so we'll assign it from here
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  // Override the default role (if a new role is assigned)
  getRole() {
    // Override role from parent class
    return this.role = "Intern";
  }
}


// module.exports = Intern;