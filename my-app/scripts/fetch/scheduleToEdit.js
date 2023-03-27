const nameSchedule = document.getElementById("nombreHorario")
const horarioManana = document.getElementById("horarioManana")
const horarioTarde = document.getElementById("horarioTarde")
const TH1 = document.getElementById("TH1")
const TH2 = document.getElementById("TH2")
const TH3 = document.getElementById("TH3")
const TH4 = document.getElementById("TH4")
const TH5 = document.getElementById("TH5")
const TH6 = document.getElementById("TH6")
const L1 = document.getElementById("L1")
const M1 = document.getElementById("M1")
const X1 = document.getElementById("X1")
const J1 = document.getElementById("J1")
const V1 = document.getElementById("V1")
const L2 = document.getElementById("L2")
const M2 = document.getElementById("M2")
const X2 = document.getElementById("X2")
const J2 = document.getElementById("J2")
const V2 = document.getElementById("V2")
const L3 = document.getElementById("L3")
const M3 = document.getElementById("M3")
const X3 = document.getElementById("X3")
const J3 = document.getElementById("J3")
const V3 = document.getElementById("V3")
const L4 = document.getElementById("L4")
const M4 = document.getElementById("M4")
const X4 = document.getElementById("X4")
const J4 = document.getElementById("J4")
const V4 = document.getElementById("V4")
const L5 = document.getElementById("L5")
const M5 = document.getElementById("M5")
const X5 = document.getElementById("X5")
const J5 = document.getElementById("J5")
const V5 = document.getElementById("V5")
const L6 = document.getElementById("L6")
const M6 = document.getElementById("M6")
const X6 = document.getElementById("X6")
const J6 = document.getElementById("J6")
const V6 = document.getElementById("V6")
let cells = [TH1,TH2,TH3,TH4,TH5,TH6,L1,L2,L3,L4,L5,L6,M1,M2,M3,M4,M5,M6,X1,X2,X3,X4,X5,X6,J1,J2,J3,J4,J5,J6,V1,V2,V3,V4,V5,V6]
console.log(cells[6])
function getQueryParam(){
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

fetch('./../data/prueba.json')
.then(response => response.json())
.then(data => {

    nameSchedule.value = data.name
    if(data.afternoon == 0){
        horarioManana.setAttribute("checked","")
        TH1.innerHTML = "8:30-9:30"
        TH2.innerHTML = "9:30-10:30"
        TH3.innerHTML = "10:30-11:30"
        TH4.innerHTML = "11:30-12:30"
        TH5.innerHTML = "12:30-13:30"
        TH6.innerHTML = "13:30-14:30"
    }
    if(data.afternoon == 1){
        horarioTarde.setAttribute("checked","")
        TH1.innerHTML = "14:30-15:30"
        TH2.innerHTML = "15:30-16:30"
        TH3.innerHTML = "16:30-17:30"
        TH4.innerHTML = "17:30-18:30"
        TH5.innerHTML = "18:30-19:30"
        TH6.innerHTML = "19:30-20:30"
    }
   var lenght = Object.keys(data.subjects).length
   console.log(lenght)
    for(i =0;i < lenght;i++){
            celda = ((data.subjects[i].day * 6) + data.subjects[i].Ihour) -1
            console.log(celda)
            var subject = data.subjects[i].subject
            var group = data.subjects[i].Group
            var classroom = data.subjects[i].classroom
            var duration = data.subjects[i].Duration
            var week = data.subjects[i].week
            if(week == "par"){
                cells[celda].innerHTML = subject + "\n" + group + "(" + classroom + ")" + "(p)"
            }
            if(week == "impar"){
                cells[celda].innerHTML = subject + "\n" + group + "(" + classroom + ")" + "(i)"
            }
            if(week == "ambos"){
            cells[celda].innerHTML = subject + "\n" + group + "(" + classroom + ")"
            }
            if(group == 1 || group == 2 || group == 3){cells[celda].style.backgroundColor = "#fbdb5b"}
            if(group == 17 || group == 18 || group == 19 || group == 20 || group == 21 || group == 22){cells[celda].style.backgroundColor = "#4bacc6"}
            if(group == 41 || group == 42 || group == 43 || group == 44 || group == 45 || group == 46 || group == 47 || group == 48 || group == 49 || group == 50 || group == 51 || group == 52){cells[celda].style.backgroundColor = "#9bbb59"}
            if(week == "par" || week == "impar"){cells[celda].style.backgroundColor = "#74903b"}
            cells[celda].style.color = "black"
            
            while(duration > 1 ){
                duration = duration -1
                celda = celda + 1
                if(group == 1 || group == 2 || group == 3){cells[celda].style.backgroundColor = "#fbdb5b"}
                if(group == 17 || group == 18 || group == 19 || group == 20 || group == 21 || group == 22){cells[celda].style.backgroundColor = "#4bacc6"}
                if(group == 41 || group == 42 || group == 43 || group == 44 || group == 45 || group == 46 || group == 47 || group == 48 || group == 49 || group == 50 || group == 51 || group == 52){cells[celda].style.backgroundColor = "#9bbb59"}
                if(week == "par" || week == "impar"){cells[celda].style.backgroundColor = "#74903b"}
            }
        }
    

    

})