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

module.exports = {getAge};