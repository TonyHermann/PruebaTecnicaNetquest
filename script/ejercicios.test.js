const {getAge, randomOrder} = require('./ejercicios')

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

test('Debería entregar 2 arrays con diferente orden', () => {
    let first = randomOrder(["perro", "gato", "ratón", "pájaro", "caballo", "elefante"]);
    let second = randomOrder(["perro", "gato", "ratón", "pájaro", "caballo", "elefante"]);  
    expect(first === second).toBe(false);
});