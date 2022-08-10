const {getAge} = require('./getAge');

test('Debería entregar la edad correctamente', () => {
    expect(getAge(new Date("01/12/2004"))).toBe(18);
});

test('Debería entregar la edad correctamente dependiendo del mes', () => {  
    let today = new Date();

    let birthday = new Date("01/12/2004")

    var bdPlusOne = birthday;

    bdPlusOne.setMonth(today.getMonth()+1)

    expect(getAge(bdPlusOne)).toBe(17);
});