// Imports
import { hasNumber } from "./general.js";

// Función que valida el input del mail
let validateMail = (mail, errorsArray) => {
  let emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!emailRegex.test(mail)) {
    errorsArray.push("Hay un error en la direccion de correo que escribió");
  }
};

// Función que valida el input del mail
let validateTel = (tel, errorsArray) => {
  let phoneno = /^\(?([0-9]{2})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if (!tel.match(phoneno)) {
    errorsArray.push("El formato del teléfono es incorrecto");
  }
  if (!hasNumber(tel)) {
    errorsArray.push("El númeor de teléfono solo debe estar compuesto por números");
  }
};

// Función que valida el input del mail
let validateMsg = (msg, errorsArray) => {
  if (msg.length < 51) {
    errorsArray.push("El mensaje no puede tener menos de 50 caracteres");
  } else if (msg.length > 250) {
    errorsArray.push("El mensaje no puede tener más de 250 caracteres");
  }
};

// Función que llama a las funciones para validar cada campo que debe ser validado disponible en el obj.
export let validateContent = (formContentObj) => {
  let errors = [];
  validateTel(formContentObj.tel, errors);
  validateMail(formContentObj.mail, errors);
  validateMsg(formContentObj.msg, errors);
  return errors;
};
