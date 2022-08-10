const {contarOcurrencias} = require('./primer_prueba.js');

test('Debería contar correctamente la cantidad de ocurrencias de cada palabra', () => {
    let array = ['que','que','que','que','que','que','que','sososo','sososo','sososo'];
    let expectedObject = {
        que: 7,
        sososo: 3
    }
    let occurrences = contarOcurrencias(array);
    expect(occurrences).toEqual(expectedObject);
});
