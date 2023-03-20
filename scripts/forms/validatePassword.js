function ValidatePassword(){
    const regex = /^(?=.*\d)(?=.*[A-Z])/;
    var password = document.getElementById("passwordInput").value;
    if(password.length < 8){
        document.getElementById("passwordInput")
            .setCustomValidity("Debe tener al menos 8 caracteres");
    }
    else if(password.length > 64){
        document.getElementById("passwordInput")
            .setCustomValidity("No debe tener más de 64 caracteres");
    }
    else if(!password.match(/(?=.*[a-zA-Z])/)){
        document.getElementById("passwordInput")
            .setCustomValidity("Debe contener al menos una letra");
    }
    else if(!password.match(/(?=.*\d)/)){
        document.getElementById("passwordInput")
            .setCustomValidity("Debe contener al menos un dígito");
    }
    else {
        document.getElementById("passwordInput")
            .setCustomValidity("");
    }
}