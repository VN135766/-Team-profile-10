
const Employee = require('../lid/Employee');

test('this will create an employee object', () => {
    const employee = new employee('Victor', '01', 'vn135766@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});
test('gets an employee ID', () => {
    const employee = new employee('Victor', '01', 'vn135766@gmail.com');
    expect(employee.getId()).toEqual(expect.any(Number));
});

test('gets an employee email', () => {
    const employee = new employee('Victor', '01', 'vn135766@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('gets role of employee', () => {
    const employee = new employee('Victor', '01', 'vn135766@gmail.com');

    expect(employee.getTypeOfEmployee()).toEqual("employee");
})

