// variable 
let amigos = [];

// funcione de texto
function asignarTextoElemento (elemento, texto){
    let elementoHTML = document.querySelector (elemento);
    elementoHTML.innerHTML = texto
    return;
}

// funcion de añadir nombres 
function agregarAmigo() {
   
const nombreIngresado = document.getElementById("amigo").value ;
// console.log (typeof(nombreIngresado));
console.log ("nombres=" +nombreIngresado)

if (nombreIngresado!=="") { 
    amigos.push(nombreIngresado);
    console.log (amigos);
    nombresEnInterfaz();
    } else {
    alert ("No ingresaste ningun nombre");
    document.getElementById("amigo").value = "";
}

limpiarCampo();

return;
}
//funcion nombres en la interfaz 
function nombresEnInterfaz() {
    let listaHTML = "<ul>"; 

    amigos.forEach((nombre) => {
        listaHTML += `<li>${nombre}</li>`; 
    });

    listaHTML += "</ul>"; 

    asignarTextoElemento("#listaAmigos", listaHTML);
}
  

//funcion sortear amigo y validaciones
function sortearAmigo() {
    if (amigos.length < 2){
        alert ("ingrese más de un nombre de usuario");
        return;
    }
    if (amigos.length === 0){
        alert ("No ingresaste nombres para sortear")
        return;
    }
    if (amigos.length === 1){
        alert ("Solo ingresaste un nombre de usuario")
        return;
    }

// funcion de limpiado de campos 

    function limpiarCampo () {
        let valorCaja =document.querySelector("#amigo");
        valorCaja.value= "";
}

    let nombreAleatorio = Math.floor(Math.random()*amigos.length);
    let nombreElegido = amigos[nombreAleatorio];
    asignarTextoElemento ("#resultado", `¡tu amigo secreto es ${nombreElegido}!`);
    console.log ("nombre elegido =" +nombreElegido );
    amigos = [];
    nombresEnInterfaz ();
}
