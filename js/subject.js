const subjectName = document.getElementById("nameSubjectText")
const type = document.getElementById("typeText")
const grade = document.getElementById("gradeText")
const department = document.getElementById("departmentText")
const duration = document.getElementById("durationText")
const credits = document.getElementById("creditsText")
const year = document.getElementById("yearSubjectText")

function getQueryParam() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}


fetch('./../data/subjects.json')
    .then(response => response.json())
    .then(data => {

        const subjectId = getQueryParam()
        const asignatura = data.find(item => item.id === subjectId) || data[0]
        
        subjectName.innerHTML = `${asignatura.asignatura}`
        type.innerHTML = `<strong>Tipo: </strong>${asignatura.tipo !== "" ? asignatura.tipo : "-----"}`
        grade.innerHTML = `<strong>Titulación: </strong>${asignatura.titulacion !== "" ? asignatura.titulacion : "----"}`
        department.innerHTML = `<strong>Departamento: </strong>${asignatura.departamento !== "" ? asignatura.departamento : "-----"}`
        duration.innerHTML = `<strong>Duracion: </strong>${asignatura.duracion !== "" ? asignatura.duracion : "-----"}`
        credits.innerHTML = `<strong>Créditos: </strong>${asignatura.creditos !== "" ? asignatura.creditos : "-----"}`
        year.innerHTML = `<strong>Año: </strong>${asignatura.año !== "" ? asignatura.año : "-----"}`

    })

