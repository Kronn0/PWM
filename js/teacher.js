const teacherName = document.getElementById("nameTeacherText")
const knowledge = document.getElementById("knowledgeText")
const email = document.getElementById("emailText")
const dispatch = document.getElementById("dispatchText")
const phone = document.getElementById("phoneText")

const mondayHour = document.getElementById("mondayHourText")
const tuesdayHour = document.getElementById("tuesdayHourText")
const wednesdayHour = document.getElementById("wednesdayHourText")
const thursdayHour = document.getElementById("thursdayHourText")
const fridayHour = document.getElementById("fridayHourText")



function getQueryParam() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

fetch('./../data/teachers.json')
    .then(response => response.json())
    .then(data => {
        const teacherId = getQueryParam()
        const teacher = data.find(item => item.id === teacherId) || data[0]

        teacherName.innerHTML = `${teacher.profesorado.profesor}`
        knowledge.innerHTML = `<strong>Áreas de conocimiento: </strong> ----`
        email.innerHTML = `<strong>Correo electrónico: </strong> ${teacher.profesorado.email}`
        dispatch.innerHTML = `<strong>Despacho: </strong>${teacher.profesorado.despacho}`
        phone.innerHTML = `<strong>Teléfono: </strong>${teacher.profesorado.telefono}`

        mondayHour.innerHTML = `${teacher.tutorias.LUNES}`
        tuesdayHour.innerHTML = `${teacher.tutorias.MARTES}`
        wednesdayHour.innerHTML = `${teacher.tutorias.MIÉRCOLES}`
        thursdayHour.innerHTML = `${teacher.tutorias.JUEVES}`
        fridayHour.innerHTML = `${teacher.tutorias.VIERNES}`

    })