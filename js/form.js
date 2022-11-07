const btnResumen = document.getElementById("btnResumen");
const pResultado = document.getElementById("resultado");

const valorEntradaGeneral = 200;
const valorEstudiante = 0.2; 
const valorTrainee = 0.5; 
const valorJunior = 0.85; 
let totalPagar = '';
let cantidad = '';
let categoria = '';

function obtenerCantidad () {
    let c = document.getElementById("inputCantidad").value;
    return c;
}

function obtenerCategoria()  {
    let c = document.getElementById("sel1").value;
    return c;
}


function calcularPrecio(){
    if (obtenerCantidad() == 0) {
        alert("La cantidad no puede ser cero");
    } else {
        if (obtenerCategoria() == "Estudiante"){
            totalPagar = valorEntradaGeneral * obtenerCantidad() * valorEstudiante;
        } else if (obtenerCategoria() == "Trainee") {
            totalPagar = valorEntradaGeneral * obtenerCantidad() * valorTrainee;
        } else {
            totalPagar = valorEntradaGeneral * obtenerCantidad() * valorJunior;
        }
    }
    return totalPagar;
}


function resumen(e) {
    e.preventDefault();
    console.log("el valor de inputCantidad es: " + obtenerCantidad())
    console.log("el valor de inputCategoria es: " + obtenerCategoria()) 
    totalPagar = calcularPrecio();
    pResultado.innerHTML = `${totalPagar}`;

}

btnResumen.onclick = resumen;
