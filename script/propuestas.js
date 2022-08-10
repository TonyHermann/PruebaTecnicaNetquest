// Imports
import {validateContent} from "./utilities/validaciones.js";


document.addEventListener("DOMContentLoaded", () => {
  // Espero a que el DOM se cargue para evitar errores como:
  /// Buscar elementos que aún no existen
  launchApp();
});

let launchApp = () => {
  initSelect();
  initPopUp();
  initForm();
};

const formContentObjBase = {
  name: "",
  mail: "",
  tel: "",
  msg: "",
};

// Inicio select
let createValueDiv = (selectElement) => {
  // Si no existe el p, lo creo
  if (!document.querySelector(".desplegable_value")) {
    let value = selectElement.value;
    // Creo el div
    let div = document.createElement("div");
    // Creo el p para poner el value
    let p = document.createElement("p");
    p.classList.add("desplegable_value");
    // Añado el p al div
    div.appendChild(p);

    // Añado el div luego del select
    selectElement.parentNode.insertBefore(div, selectElement.nextSibling);
  }
};

let observeSelect = (selectElement) => {
  selectElement.addEventListener("input", () => {
    // Busco el p para poner el value
    let p = document.querySelector(".desplegable_value");
    p.textContent = `Opción seleccionada: ${selectElement.value}`;
  });
};

let initSelect = () => {
  let select = document.querySelector(".desplegable");
  createValueDiv(select);
  observeSelect(select);
};
// Fin select

// Inicio popup
let observeButton = (button) => {
  const top = window.top.outerHeight / 2 + window.top.screenY - 500 / 2;
  const left = window.top.outerWidth / 2 + window.top.screenX - 500 / 2;

  let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
    width=500,height=500,top=${top},left=${left}`;

  button.addEventListener("click", () => {
    open("/popup.html", "test", params);
  });
};

let initPopUp = () => {
  // Busco el boton (el span)
  let button = document.querySelector("#popup_button");
  observeButton(button);
};
// Fin popup

// Inicio form

// Función que agarra los inputs del dom
let getInputCollection = () => {
  // Inicializo la variable inputs en la que voy a poner todos los inputs
  let inputCollection = [];

  // Busco los inputs
  let nameInput = document.querySelector("#name");
  let emailInput = document.querySelector("#mail");
  let telInput = document.querySelector("#tel");
  let messageInput = document.querySelector("#msg");

  // Los pusheo al array de inputs
  inputCollection.push(nameInput, emailInput, telInput, messageInput);
  return inputCollection;
};


// Función que observa los inputs y modifica el objeto
let observeForm = (formContentObject, inputCollection) => {
  // Le añado un eventListener a cada uno
  inputCollection.forEach((element) => {
    element.addEventListener("input", (e) => {
      // Cuando se modifique, que lo añada al formContentObject
      formContentObject[element.id] = element.value;
    });
  });
};

// Función que maneja el submit del form
let handleSubmit = (formContentObj, inputCollection) => {
  let form = document.querySelector("#form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // Valido los valores de los inputs
    let errors = validateContent(formContentObj);
    if (errors.length > 0) {
      alert(errors);
    } else {
      // Simulación de los datos recibidos por el servidor
      alert(
        `
        "parsed" data:
        Nombre: ${formContentObj.name}
        Correo: ${formContentObj.mail}
        Teléfono: ${formContentObj.tel}
        Mensaje: ${formContentObj.msg}
        raw data:
        ${JSON.stringify(formContentObj)}
        `
      );

      // Reinicio los valores de los inputs
      inputCollection.forEach((element) => {
        element.value = "";
      });
      formContentObj = formContentObjBase;
    }
  });
};

let initForm = () => {
  // Creo el objeto vacio
  let formContentObj = {
    name: "",
    mail: "",
    tel: "",
    msg: "",
  };

  let inputColletion = getInputCollection();

  observeForm(formContentObj, inputColletion);

  handleSubmit(formContentObj, inputColletion);
};
// Fin form

// TODO: hacer modulos de js
// TODO: Arreglar css de la página
// TODO: Específicar el tema del test.js
// TODO: Subir a GitHub
// TODO: Hostear en GH Pages
