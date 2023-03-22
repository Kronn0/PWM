const subjectsUl = document.getElementById("subjectsListContainer")

fetch('./../data/subjects.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(subject => {
            subjectsUl.insertAdjacentHTML(
                'beforeend', 
                `<div>
                    <p>${subject.asignatura}</p>
                    <p>Año ${subject.año}</p> 
                </div>`
            )
        })
    })