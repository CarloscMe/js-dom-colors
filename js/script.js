const inputRojo = document.getElementById("rojo");
const inputVerde = document.getElementById("verde");
const inputAzul = document.getElementById("azul");
const inputAlpha = document.getElementById("alpha");

const textoRojo = document.querySelector(".texto-rojo");
const textoVerde = document.querySelector(".texto-verde");
const textoAzul = document.querySelector(".texto-azul");
const textoAlpha = document.querySelector(".texto-alpha");

const strong = document.querySelector(".red");
const strong1 = document.querySelector(".green");
const strong2= document.querySelector(".blue");
const strong3= document.querySelector(".alpha");

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

inputRojo.addEventListener("input", () =>{
  rojo = inputRojo.value;
  textoRojo.innerText = rojo;
  strong.textContent = rojo;
  actualizarColor(rojo, verde, azul, alpha)
});

inputVerde.addEventListener("input", () =>{
   verde = inputVerde.value;
   textoVerde.innerText = verde;
   strong1.textContent = verde;
   actualizarColor(rojo, verde, azul, alpha)
 });

 inputAzul.addEventListener("input", () =>{
   azul = inputAzul.value;
   textoAzul.innerText = azul;
   strong2.textContent = azul;
   actualizarColor(rojo, verde, azul, alpha)
 });

 inputAlpha.addEventListener("input", () => {
    alpha = inputAlpha.value;
    textoAlpha.innerText = alpha;
    strong3.textContent = alpha;
    actualizarColor(rojo, verde, azul, alpha)
 });