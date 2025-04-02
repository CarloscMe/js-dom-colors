const inputRojo = document.getElementById("rojo");
const inputVerde = document.getElementById("verde");
const inputAzul = document.getElementById("azul");
const inputAlpha = document.getElementById("alpha");

const textoRojo = document.getElementById("texto-rojo");
const textoVerde = document.getElementById("texto-verde");
const textoAzul = document.getElementById("texto-azul");
const textoAlpha = document.getElementById("texto-alpha");

const caja = document.querySelector(".cajita");

let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;
let alpha = inputAlpha.value;

textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;
textoAlpha.innerText = alpha;


function actualizarColor(rojo,verde,azul, alpha) {
    const colorRGB = `rgb(${rojo}, ${verde}, ${azul}, ${alpha})`;
    caja.style.backgroundColor = colorRGB;
}

inputRojo.addEventListener("change", () =>{
   rojo = inputRojo.value;
  textoRojo.innerText = rojo;
  actualizarColor(rojo, verde, azul, alpha)
});

inputVerde.addEventListener("change", () =>{
    verde = inputVerde.value;
   textoVerde.innerText = verde;
   actualizarColor(rojo, verde, azul, alpha)
 });

 inputAzul.addEventListener("change", () =>{
    azul = inputAzul.value;
   textoAzul.innerText = azul;
   actualizarColor(rojo, verde, azul, alpha)
 });

 inputAlpha.addEventListener("change", () => {
    alpha = inputAlpha.value;
    textoAlpha.innerText = alpha;
    actualizarColor(rojo, verde, azul, alpha)
 });

