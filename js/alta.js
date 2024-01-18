const saveGame = game => {
    const form = document.getElementById('uploadForm')
    const initialValue = localStorage.getItem('games')
    if (initialValue) {
        let values = JSON.parse(initialValue)
        values.push(game)
        const newValStg = JSON.stringify(values)
        localStorage.setItem('games', newValStg)
    } else {
        const initialGames = JSON.stringify([game])
        localStorage.setItem('games', initialGames)
    }
    form.reset()
    alert('El juego ha sido guardado correctamente')
}

// Para optimizar el código, vinculo el form para traer a los hijos y hacer un ciclo FOR
const onSubmitProduct = e => {
    e.preventDefault()
    let validForm = true;
    const nameInput = document.getElementById('name');
    const priceInput = document.getElementById('price');
    const stockInput = document.getElementById('stock');
    const brandInput = document.getElementById('brand');
    const categoryInput = document.getElementById('category');
    const shortDescriptionInput = document.getElementById('shortDescription');
    const descriptionInput = document.getElementById('description');
    const freeShippingInput = document.getElementById('freeShipping');
    const ageFromInput = document.getElementById('ageFrom');
    const ageToInput = document.getElementById('ageTo');
    const photoInput = document.getElementById('photo');

    const nameError = document.getElementById('nameError');
    const priceError = document.getElementById('priceError');
    const stockError = document.getElementById('stockError');
    const brandError = document.getElementById('brandError');
    const categoryError = document.getElementById('categoryError');
    const shortDescriptionError = document.getElementById('shortDescriptionError');
    const ageFromError = document.getElementById('ageFromError');
    const ageToError = document.getElementById('ageToError');

    // Nombre *
    if (validateStrings(nameInput.value)) {
        const validString = validateStringsLength(nameInput.value, 2, 30)
        if (validString === true) {
            nameInput.ariaInvalid = false
            nameError.innerText = ''
            nameError.style.display = 'none'
        } else {
            nameInput.ariaInvalid = true
            nameError.innerText = validString
            nameError.style.display = 'block'
            validForm = false
        }
    } else {
        nameInput.ariaInvalid = true;
        nameError.innerText = 'Debe colocar caracteres alfabéticos.'
        nameError.style.display = 'block'
        validForm = false
    }

    // Marca
    if (brandInput.value.length > 0) {
        if (validateStrings(brandInput.value)) {
            const validStringBrand = validateStringsLength(brandInput.value, 2, 30)
            if (validStringBrand === true) {
                brandInput.ariaInvalid = false
                brandError.innerText = ''
                brandError.style.display = 'none'
            } else {
                brandInput.ariaInvalid = true
                brandError.innerText = validStringBrand
                brandError.style.display = 'block'
                validForm = false
            }
        } else {
            brandInput.ariaInvalid = true;
            brandError.innerText = 'Debe colocar caracteres alfabéticos.'
            brandError.style.display = 'block'
            validForm = false
        }
    }

    // Categoría *
    if (validateStrings(categoryInput.value)) {
        const validStringCategory = validateStringsLength(categoryInput.value, 2, 15)
        if (validStringCategory === true) {
            categoryInput.ariaInvalid = false
            categoryError.innerText = ''
            categoryError.style.display = 'none'
        } else {
            categoryInput.ariaInvalid = true
            categoryError.innerText = validStringCategory
            categoryError.style.display = 'block'
            validForm = false
        }
    } else {
        categoryInput.ariaInvalid = true;
        categoryError.innerText = 'Debe colocar caracteres alfabéticos.'
        categoryError.style.display = 'block'
        validForm = false
    }

    // Descripción corta *
    if (validateStrings(shortDescriptionInput.value)) {
        const validStringDesc = validateStringsLength(shortDescriptionInput.value, 10, 120)
        if (validStringDesc === true) {
            shortDescriptionInput.ariaInvalid = false
            shortDescriptionError.innerText = ''
            shortDescriptionError.style.display = 'none'
        } else {
            shortDescriptionInput.ariaInvalid = true
            shortDescriptionError.innerText = validStringDesc
            shortDescriptionError.style.display = 'block'
            validForm = false
        }
    } else {
        shortDescriptionInput.ariaInvalid = true;
        shortDescriptionError.innerText = 'Debe colocar caracteres alfabéticos.'
        shortDescriptionError.style.display = 'block'
        validForm = false
    }

    // Precio
    if (!validatePositiveNumber(priceInput.value)) {
        priceInput.ariaInvalid = true;
        priceError.innerText = 'Debe ser un número positivo.'
        priceError.style.display = 'block'
        validForm = false
    } else {
        priceInput.ariaInvalid = false
        priceError.innerText = ''
        priceError.style.display = 'none'
    }

    // Stock *
    if (!validatePositiveNumber(stockInput.value)) {
        stockInput.ariaInvalid = true
        stockError.innerText = 'Debe ser un número positivo'
        stockError.style.display = 'block'
        validForm = false
    } else if (!validateInt(parseInt(stockInput.value))) {
        stockInput.ariaInvalid = true
        stockError.innerText = 'Debe ser un número entero'
        stockError.style.display = 'block'
        validForm = false
    } else {
        stockInput.ariaInvalid = false;
        stockError.innerText = ''
        stockError.style.display = 'none'
    }

    // Edad desde - Edad hasta
    if (ageFromInput.value.length || ageToInput.value.length) {
        if (!validatePositiveNumber(ageFromInput.value)) {
            ageFromInput.ariaInvalid = true
            ageFromError.innerText = 'Debe ser un número positivo'
            ageFromError.style.display = 'block'
            validForm = false
        } else if (!validateInt(parseInt(ageFromInput.value))) {
            ageFromInput.ariaInvalid = true
            ageFromError.innerText = 'Debe ser un número entero'
            ageFromError.style.display = 'block'
            validForm = false
        } else {
            ageFromInput.ariaInvalid = false
            ageFromError.innerText = ''
            ageFromError.style.display = 'none'
        }

        if (!validatePositiveNumber(ageToInput.value)) {
            ageToInput.ariaInvalid = true
            ageToError.innerText = 'Debe ser un número positivo'
            ageToError.style.display = 'block'
            validForm = false
        } else if (!validateInt(parseInt(ageToInput.value))) {
            ageToInput.ariaInvalid = true
            ageToError.innerText = 'Debe ser un número entero'
            ageToError.style.display = 'block'
            validForm = false
        } else if (parseInt(ageFromInput.value) >= parseInt(ageToInput.value)) {
            ageToInput.ariaInvalid = true
            ageToError.innerText = 'La edad hasta no debe ser menor a edad desde'
            ageToError.style.display = 'block'
            validForm = false
        } else {
            ageToInput.ariaInvalid = false
            ageToError.innerText = ''
            ageToError.style.display = 'none'
        }
    }

    if (validForm) {
        const game = {
            name: nameInput.value,
            price: parseFloat(priceInput.value).toFixed(2),
            stock: parseInt(stockInput.value),
            brand: brandInput.value,
            category: categoryInput.value,
            shortDescription: shortDescriptionInput.value,
            description: descriptionInput.value,
            freeShipping: freeShippingInput.checked,
            ageFrom: ageFromInput.value === '' ? '' : parseInt(ageFromInput.value),
            ageTo: ageToInput.value === '' ? '' : parseInt(ageToInput.value),
            photo: photoInput.value,
        }
        saveGame(game)
    }
}