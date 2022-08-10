let createArray = (text) => {
    return text.split(" ");
}

let verify = (word) => {
    const specialChars = `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\/¿~]`;
    specialChars.split('').some(specialChar => {

        if (word.includes(specialChar)) {
     
            word = word.replace(specialChar, '');
        }
    })
    return word
}

let sanitizeArray = (array) => {
    let sanitizedArray = [];
    
    array.forEach(element => {

        let sanitizedWord = verify(element);
        sanitizedArray.push(sanitizedWord);
        
    });

    return sanitizedArray;
}


let order = (array) => {
    array.sort((word1, word2) => {
        if(word1 > word2) {
            return 1;
        }
        if(word1 < word2) {
            return -1;
        }
        return 0;
    });
    return array;
}

let contarOcurrencias = (array) => {
    let ocurrencias = {};
    let sortedArray = order(array);

    for (const element of sortedArray){
        let d = element;
        if(ocurrencias[d]) {
            ocurrencias[d] +=1;
        } else {
            ocurrencias[d] = 1;
        }
    }
    
    
    return ocurrencias
}

let text = "¿Qué es Lorem Ipsum? Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500";

let array = sanitizeArray(createArray(text));

let ocurrencias = contarOcurrencias(array);
console.log(ocurrencias);

module.exports = {contarOcurrencias};