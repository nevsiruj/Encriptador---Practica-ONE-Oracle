
const entrada = document.querySelector('#entrada')
const salida = document.querySelector('#txt2')

// Desaparecer elementos

function ocultar () {
    var muñeco = document.querySelector("#muñeco");
    var txt1 = document.querySelector("#txt1");
    var txt2 = document.querySelector("#txt2");
    var copyBtn = document.querySelector("#copyAcc");

    txt1.classList.add("invisible");
    muñeco.classList.add("invisible");
    txt2.classList.add("mostrar");
    copyBtn.classList.remove("invisible");

}

// Convertir a LowerCase
const lowerCaseCorrection = (str) => {
    return str.toLowerCase();
}

// Remover acentos
const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  } 

//  Encriptar Texto
function uiEncriptar (){
    ocultar();
    let texto = document.querySelector("#entrada").value;
    let textoV = document.getElementById("entrada");
    let lowTexto = lowerCaseCorrection(texto);
    let cadena = removeAccents(lowTexto);
    textoV.value = cadena;
    let textoCifrado = cadena.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.getElementById("txt2").textContent = textoCifrado;
}

// Desencriptar
function uiDesencriptar () {
    ocultar();
    var texto = document.querySelector("#entrada").value;
    var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.getElementById("txt2").textContent = textoCifrado;
}

// Copiar al portapapeles
function copyToClipBoard() {
    let entrada  = document.querySelector("#entrada");
    entrada.value = "";

    var copyText = document.getElementById("txt2");
  
    console.log(copyText);
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
  
    navigator.clipboard.writeText(copyText.value);
  }