// here we import constructor
const Employee = require("./Employee");
// here we add a contructor that extends from employee constructor 
class Engineer extends Employee {
    constructor (name, email, id) {

        super (name, email, id);
    }

    getTypeOfEmployee () {
        return "Engineer"
    }
}
module.exports = Engineer;