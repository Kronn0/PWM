function CheckPasswordMatch(){
    if(document.getElementById("passwordInput").value !=
    document.getElementById("confirmPasswordInput").value){
        document.getElementById("confirmPasswordInput")
            .setCustomValidity("Las constraseñas deben coincidir");
    } else {
        document.getElementById("confirmPasswordInput")
            .setCustomValidity("");
    }
}