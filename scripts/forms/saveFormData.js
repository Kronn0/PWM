function SaveFormData () {
    const inputsList = document.getElementsByTagName("input");
    // Guarda los datos del formulario salvo contraseñas
    for (i = 0; i < inputsList.length; i++) {
        if (inputsList[i].type != "password"){
            sessionStorage.setItem(inputsList[i].id,
                inputsList[i].value);
        }
    }
}