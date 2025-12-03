class Status{
    constructor(label, color){
        this.label = label;
        this.color = color;
    }
}

const EJ_BOKAD = new Status("Ej bokad", "red");
const BOKAD = new Status("Bokad", "green");
const RINGA = new Status("Ringa", "yellow");
const ATERKOPPLA = new Status("Återkoppla", "blue");
const FARDIG = new Status("Färdig", "white");

let currentStatus = EJ_BOKAD;
