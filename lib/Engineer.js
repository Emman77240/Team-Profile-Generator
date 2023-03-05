// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
import Employee from '../lib/Employee.js';

export default class Engineer extends Employee {
  constructor(name, id, email, github) {
    // Rather than doing this.name, this.id, etc. for all classes, we can just use the default properties from the
    // Employee class which contains properties that are valid for all other classes
    super(name, id, email);
    
    // The below property is unique to this class so we'll assign it from here
    this.github = github;
  }

  // Return the Github link
  getGithub() {
    return this.github;
  }

  // Override the default role (if a new role is assigned)
  getRole() {
    // Set role from parent class
    return this.role = "Engineer";
  }
}

// module.exports = Engineer;