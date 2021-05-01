class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee";
    }
    //return the employee ID
    getName() {
        return this.name;
    }
    //return the employee ID
    getId() {
        return this.id;
    }
    // return the Employee's email
    getEmail() {
        return this.email;
    }
    // return the Epmloyee role
    getRole() {
        return this.role;
    }
}

module.exports = Employee;