const boton = document.querySelector("button");
const color = document.getElementById("color");
const contenedor = document.getElementById("caja_2")

function generarColorHexAleatorio() {
    let digitos = "0123456789abcdef";
    let colorHex = "#";

    for (let i = 0; i < 6; i++) {
       let indiceAleatorio = Math.floor(Math.random() * 16);
       colorHex += digitos[indiceAleatorio];
    }

    return colorHex;
}

const colorGuardado = localStorage.getItem("colorFondo");
if (colorGuardado) {
    contenedor.style.backgroundColor = colorGuardado;
    color.innerText = colorGuardado;
}

boton.addEventListener("click", function() {
    let colorAleatorio = generarColorHexAleatorio();
    color.innerText = colorAleatorio;
    contenedor.style.backgroundColor = colorAleatorio;
    localStorage.setItem("colorFondo", colorAleatorio);
});
