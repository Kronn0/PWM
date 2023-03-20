function SaveFormData () {
    const inputsList = document.getElementsByTagName("input");
    for (i = 0; i < inputsList.length; i++) {
        if (inputsList[i].type != "password"){
            sessionStorage.setItem(inputsList[i].id,
                inputsList[i].value);
        }
    }
}