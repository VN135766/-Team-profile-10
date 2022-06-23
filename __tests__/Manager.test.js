const Manager = require('../lid/Manager');

test('creates an Manager object', () => {
    const manager = new Manager('Victor', '01', 'vn135766@gmail.com', 123);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of employee', () => {
    const manager = new Manager('Victor', '01', 'vn135766@gmail.com');

    expect(manager.getTypeOfEmployee()).toEqual("Manager");
});