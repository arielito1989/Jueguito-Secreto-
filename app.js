let numeroSecreto = 0;
let intentos =0;
let listaNumerosSorteados =[];
console.log(numeroSecreto); 

function asignarTextoElemento (elemento, texto) {
    let tituParra = document.querySelector(elemento);
    tituParra.innerHTML = texto;
    return;
}

function limpiar() {
    document.getElementById("valorDeUsuario").value="";

}

function GeneranumeroSecreto() {
    return Math.floor(Math.random() * 10) + 1;
    
}
function condicionesIniciales() {
    asignarTextoElemento("h1", "¡¡¡Adivina el Nùmero!!!");
    asignarTextoElemento("p", "Ingresa un nùmero entre el 1 y el 10:");
    numeroSecreto=GeneranumeroSecreto();
    intentos=1;
}

function ReiniciarJuego() {
    limpiar();
    condicionesIniciales();
    document.getElementById("reiniciar").setAttribute("disabled", true);
    
}

function verificarIntento() {
    let numberUsuario = parseInt(document.getElementById("valorDeUsuario").value);
    if (numberUsuario === numeroSecreto) {
        asignarTextoElemento("p", `Adivinaste el número secreto es: ${numeroSecreto}, te tomo ${intentos} ${intentos ==1? "intento" :"intentos"},  felicidades!`);
        document.getElementById("reiniciar").removeAttribute("disabled");

    }    else if (numberUsuario > numeroSecreto) {
        asignarTextoElemento("p", "El número secreto es menor");
    
    }    else if (numberUsuario < numeroSecreto) {
        asignarTextoElemento("p", "El número secreto es mayor");
    }
    intentos++;
    limpiar();
return
}


condicionesIniciales();





