/*
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del número secreto';
let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un número del 1 al 10';
*/

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
  
    console.log(`${intentos} ${intentos === 1 ? 'intento' : 'intentos'}`);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');        
    } else 
    // El usuario no acertó.
    if (numeroDeUsuario > numeroSecreto){
        asignarTextoElemento('p','El número secreto es menor');
    } else {
        asignarTextoElemento('p','El número secreto es mayor');
    }
    intentos++;
    limpiarCaja();
    return;    
}



//Borra el número que ingresa el usuario.
function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
    
}

//Genera un número random entre 1 y 10.
function generarNumeroSecreto() {
    // Creamos una variable para almacenar los números que salieron en una lista para que no se vuelvan a repetir.
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //Si ya sorteamos todos los números.
    if(listaNumerosSorteados.length == numeroMaximo)
    {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
        //Si el número generado está incluído en la lista se llama nuevamente a la función para que genere otro número.
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            // push agrega el número al final de la lista.
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números    
    //Generar el número aleatorio    
    //Inicializar el número Intentos    
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego    
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();



