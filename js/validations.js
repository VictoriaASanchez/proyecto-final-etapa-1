// Nombre *
// Marca *
// Categoría *
// Descripción corta *

// Validación caracteres
const validateStrings = (string) => {
    const regex = new RegExp('^[A-Za-z Ññ]+$') // Valida que acepte estos valores
    return regex.test(string)
}

// Validación cantidad de caracteres
const validateStringsLength = (stg, minLength, maxLength) => {
    if (stg.length < minLength) {
        return `El valor debe tener al menos ${minLength} caracteres.`
    } else if (stg.length > maxLength) {
        return `El valor no debe tener más de ${maxLength} caracteres.`
    } else {
        return true
    }
}

// Precio *
// Stock *
// Edad desde - Edad hasta

const validatePositiveNumber = num => num >= 0;

const validateInt = num => Number.isInteger(num);

/* ---------------------------------------------- */

// Emails
const validateEmails = (email) => {
    const regex = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(email)
}