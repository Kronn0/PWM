window.onload = function LoadFormData() {
    if (sessionStorage.length!=0){
        const inputsList = document.getElementsByTagName("input");
        for (i = 0; i < inputsList.length; i++) {
            if (sessionStorage.getItem(inputsList[i].id) != null){
                inputsList[i].setAttribute(
                    "value",sessionStorage.getItem(inputsList[i].id));
            }
        }
    }

}