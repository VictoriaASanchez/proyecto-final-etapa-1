const onSubmitContact = e => {
    e.preventDefault();
    let validForm = true;

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('mail');
    const commentInput = document.getElementById('comment')

    const nameError = document.getElementById('nameError');
    const mailError = document.getElementById('mailError');

    // Nombre
    if (validateStrings(nameInput.value)) {
        const validStg = validateStringsLength(nameInput.value, 5, 20);
        if (validStg === true) {
            nameInput.ariaInvalid = false;
            nameError.innerText = '';
            nameError.style.display = 'none'
        } else {
            nameInput.ariaInvalid = true;
            nameError.innerText = validStg;
            nameError.style.display = 'block';
            validForm = false;
        }
    } else {
        nameInput.ariaInvalid = true;
        nameError.innerText = 'Debe colocar caracteres alfanuméricos';
        nameError.style.display = 'block';
        validForm = false;
    }

    // Mail
    if (validateEmails(emailInput.value)) {
        emailInput.ariaInvalid = false;
        mailError.innerText = '';
        mailError.style.display = 'none'
    } else {
        emailInput.ariaInvalid = true;
        mailError.innerText = 'Ingrese un email correctamente';
        mailError.style.display = 'block';
        validForm = false;
    }

    if (validForm && commentInput.value) {
        const form = document.getElementById('uploadForm');
        
        const existingComments = JSON.parse(localStorage.getItem('messages')) || [];
    
        const newComment = {
            name: nameInput.value,
            email: emailInput.value,
            comment: commentInput.value
        };
    
        existingComments.push(newComment);
    
        localStorage.setItem('messages', JSON.stringify(existingComments));
    
        form.reset();
        alert('Comentario enviado correctamente');

    } else {
        alert('Debe completar el comentario a enviar');
    }
}