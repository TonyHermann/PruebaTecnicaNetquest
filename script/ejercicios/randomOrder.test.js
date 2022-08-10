const {randomOrder} = require('./randomOrder')

test('Debería entregar 2 arrays con diferente orden', () => {
    let first = randomOrder(["perro", "gato", "ratón", "pájaro", "caballo", "elefante"]);
    let second = randomOrder(["perro", "gato", "ratón", "pájaro", "caballo", "elefante"]);  
    expect(first === second).toBe(false);
});