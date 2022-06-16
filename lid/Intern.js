// we do the same thing, extent this constuctor from employee constuctor 
class Intern extends Employee  {
    constructor (name, email, id, school) {
        super (name, email, id); 

        this.school = school; 
    }

    getSchool () {
        return this.school;
    }
    getTypeOfEmployee () {
        return "Intern"
    }
}
module.exports = Intern;