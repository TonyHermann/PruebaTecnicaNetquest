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

// La fecha debe ser escrita en el siguiente formato "01/12/2004"
let getAge = (dateOfBirth) => {
    // Acá consigo el día de hoy
    let today = new Date();
    // La fecha de nacimiento ingresada en un objeto Date
    let birthDate = dateOfBirth;
    // Calculo la edad restando el año actual menos el año de nacimiento
    let age = today.getFullYear() - birthDate.getFullYear();

    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

console.log(getAge(new Date("01/12/2004")));

console.log(randomOrder(arrayToOrder));

module.exports = {getAge, randomOrder};