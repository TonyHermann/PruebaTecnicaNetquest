const arrayToOrder = ["perro", "gato", "ratón", "pájaro", "caballo", "elefante"];

let randomOrder = (array) => {
    let reorderedArray = [];

    reorderedArray = array.sort(() => {
        // Aquí le resté 0.5 al número para que a veces arroje números negativos
        let number = Math.random() - 0.5;
        //Si compareFunction(a, b) es mayor que 0, se sitúa b en un indice menor que a.
        //Si compareFunction(a, b) es menor que 0, se sitúa a en un indice menor que b.
        // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
        return number
    });
    return reorderedArray
};


console.log(randomOrder(arrayToOrder));

module.exports = {randomOrder};