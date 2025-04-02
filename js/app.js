/*const boton = document.querySelector("button");
const color = document.getElementById("color");

function generarColorHexAleatorio() {
    let digitos = "0123456789ABCDEF";
    let colorHex = "#";

    for (let i = 0; i < 6; i++) {
       let indiceAleatorio = Math.floor(Math.random() * 16);
       colorHex += digitos[indiceAleatorio];
    }

    return colorHex;
}

// Verificar si hay un color guardado en localStorage
const colorGuardado = localStorage.getItem("colorFondo");
if (colorGuardado) {
    // Si existe, aplicamos el color guardado al fondo y lo mostramos
    document.body.style.backgroundColor = colorGuardado;
    color.innerText = colorGuardado;
}

boton.addEventListener("click", function() {
    let colorAleatorio = generarColorHexAleatorio();
    color.innerText = colorAleatorio;

    document.body.style.backgroundColor = colorAleatorio;

    // Guardar el color en localStorage
    localStorage.setItem("colorFondo", colorAleatorio);
});*/
