const Engineer = require('../lid/Engineer');

test('this will create an engineer object', () => {
    const engineer = new Engineer('Victor', '01', 'vn135766@gmail.com');

    expect(engineer.name).toEqual(expect.any(String));
    // expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
});

test('gets role of employee', () => {
    const engineer = new Engineer('Victor', '01', 'vn135766@gmail.com');

    expect(engineer.getTypeOfEmployee()).toEqual("Engineer");
})
