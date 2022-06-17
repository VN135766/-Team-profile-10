const Employee = require ('./Employee');
// we also have the constructor extend form the employee constructor 
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email); 

        this.officeNumber = officeNumber; 
    }

    getTypeOfEmployee () {
        return "Manager"
    }
}
module.exports = Manager;