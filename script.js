//abrir popup y animación
function mostrarPopup1() {
const popup = document.getElementById("popup1"); // El popup oculto del html en const popup
popup.style.display = "flex"; // Cambia el display a flex para mostrar el popup
setTimeout(() => { // Espera un instante para aplicar la animación o si no no se ve la animación
  popup.classList.add("mostrarPopup"); // Añade la clase para mostrar el popup
}, 10); // Espera un instante para que el display se aplique antes de animar
}

function mostrarPopup2() {
const popup = document.getElementById("popup2");
popup.style.display = "flex";
setTimeout(() => {
  popup.classList.add("mostrarPopup"); 
}, 10);
}

function mostrarPopup3() {
const popup = document.getElementById("popup3");
popup.style.display = "flex";
setTimeout(() => {
  popup.classList.add("mostrarPopup");
}, 10);
}

function mostrarPopup4() {
const popup = document.getElementById("popup4");
popup.style.display = "flex";
setTimeout(() => {
  popup.classList.add("mostrarPopup");
}, 10);
}

function mostrarPopup5() {
const popup = document.getElementById("popup5");
popup.style.display = "flex";
setTimeout(() => {
  popup.classList.add("mostrarPopup");
}, 10);
}

function mostrarPopup6() {
const popup = document.getElementById("popup6");
popup.style.display = "flex";
setTimeout(() => {
  popup.classList.add("mostrarPopup");
}, 10);
}

//cerrar popup y animación
function cerrarPopup1() {
const popup = document.getElementById("popup1"); 
popup.classList.remove("mostrarPopup"); // Elimina la clase de animación de entrada
popup.classList.add("ocultar"); // Añade la clase de animación de ocultar
setTimeout(() => { 
 popup.style.display = "none"; // Cambia el display a none para ocultar el popup
 popup.classList.remove("ocultar");// Elimina la clase de ocultar para que no afecte a futuros popups
}, 300); // Tiempo de espera igual al de la animación de ocultar, ni más ni menos 
}

function cerrarPopup2() {
const popup = document.getElementById("popup2");
popup.classList.remove("mostrarPopup");
popup.classList.add("ocultar");
setTimeout(() => {
 popup.style.display = "none";
 popup.classList.remove("ocultar");
}, 300);
}

function cerrarPopup3() {
const popup = document.getElementById("popup3");
popup.classList.remove("mostrarPopup"); 
popup.classList.add("ocultar");
setTimeout(() => {
 popup.style.display = "none";
 popup.classList.remove("ocultar");
}, 300);
} 

function cerrarPopup4() { 
const popup = document.getElementById("popup4");
popup.classList.remove("mostrarPopup"); 
popup.classList.add("ocultar");
setTimeout(() => {
 popup.style.display = "none";
 popup.classList.remove("ocultar");
}, 300);
}

function cerrarPopup5() { 
const popup = document.getElementById("popup5");
popup.classList.remove("mostrarPopup");   
popup.classList.add("ocultar");
setTimeout(() => {
 popup.style.display = "none";
 popup.classList.remove("ocultar");
}, 300);
}

function cerrarPopup6() {
const popup = document.getElementById("popup6");
popup.classList.remove("mostrarPopup");   
popup.classList.add("ocultar");
setTimeout(() => {
 popup.style.display = "none";
 popup.classList.remove("ocultar");
}, 300);
}