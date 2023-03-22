const teachersUl = document.getElementById("teachersListContainer")

fetch('./../data/teachers.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(teacher => {
            console.log(teacher.profesorado.profesor)
            teachersUl.insertAdjacentHTML(
                'beforeend', 
                `<div>
                    <p>${teacher.profesorado.profesor}</p>
                    <p>Correo: ${teacher.profesorado.email}</p> 
                </div>`
            )
        })
    })