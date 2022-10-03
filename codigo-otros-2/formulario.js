//Se mando llamar la variable formulario 
var formulario = document.querySelector(".formulario")


  //Se modifico la sintaxis
  formulario.addEventListener("submit", function(e){
  e.preventDefault();
  
  var n = formulario.elements[0]
  var e = formulario.elements[1]
  var na = formulario.elements[2]

  var nombre = n.value
  var edad = e.value

  var i = na.selectedIndex
  var nacionalidad = na.options[i].value
  console.log(nombre)
  console.log(edad)
  console.log(nacionalidad)
  
  //Se modificó la condición.
  if (nombre.length == 0) {
    n.classList.add("error")
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error")
  }
  
if ((nombre.length > 0) && (edad > 18 && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad)
  }
  
});//formulario

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

var lista = document.getElementById("lista-de-invitados")
var elementoLista = document.createElement("div")
//Se agregó id para el elemento lista.
elementoLista.id = "elemento-lista"
elementoLista.classList.add("elemento-lista")
lista.append(elementoLista)


//crear el recuadro del invitado 
function crearElemento(descripcion, valor) {
var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = descripcion + ": "
inputNombre.value = valor 
elementoLista.append(spanNombre)
elementoLista.append(inputNombre)
elementoLista.append(espacio)
}//function 

crearElemento("Nombre", nombre)
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)

var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
elementoLista.append(corteLinea)
elementoLista.append(botonBorrar);

// eliminar al invitado.
botonBorrar.onclick = function() {
//this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove()
};//botonBorrar


};//function agregarInvitado

