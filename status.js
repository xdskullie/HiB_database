class Status{
    constructor(label, color){
        this.label = label;
        this.color = color;
    }
}

const VALJ = new Status("Välj status", "black");
const EJ_BOKAD = new Status("Ej bokad", "red");
const BOKAD = new Status("Bokad", "green");
const RINGA = new Status("Ringa", "yellow");
const ATERKOPPLA = new Status("Återkoppla", "blue");
const FARDIG = new Status("Färdig", "white");

let currentStatus = 0;
let statuses = [VALJ, EJ_BOKAD, BOKAD, RINGA, ATERKOPPLA, FARDIG];


function changeStatus(){
    var currentStatus = document.getElementById("status").value;
    document.getElementById("result").innerHTML = "Kundstatus: " + statuses[currentStatus].label + " (" + currentStatus + ")";
}

