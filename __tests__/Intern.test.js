const Intern = require('../lid/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('Victor', '01', 'vn135766@gmail.com', 'MSU');

    expect(intern.school).toEqual(expect.any(String));
});

test('gets employee school', () => {
    const intern = new Intern('Victor', '01', 'vn135766@gmail.com', 'MSU');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets role of employee', () => {
    const intern = new Intern('Victor', '01', 'vn135766@gmail.com', 'MSU');

    expect(intern.getTypeOfEmployee()).toEqual("Intern");
});