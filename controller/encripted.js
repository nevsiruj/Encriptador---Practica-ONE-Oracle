
  

// window.uiDesencriptar = uiDesencriptar
// window.uiEncriptar = uiEncriptar
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

var cReplace = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
  }

// function encriptar(txt) {

//     switch (txt) {
//         case "e":
//             str= cReplace.e;
//             break;
//         case "i":
//             str= cReplace.i;
//             break;
//         case "a":
//             str= cReplace.a;
//             break;
//       }

//       return str ;


    // if (txt == "a") {
    //     txt = entrada.value;
    //     str = cReplace.a;
    //     console.log(txt + "s")

    //     return str;
    // } else {
    //     return "";
    // }
// }
// function uiEncriptar(ev) {
//     salida.value = encriptar(entrada.value)
//     console.log(salida.value)
//   }

function uiEncriptar (){
    ocultar();
    var texto = document.querySelector("#entrada").value;
   
    var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.getElementById("txt2").textContent = textoCifrado;

}


// function uiEncriptar(e){

//     document.getElementById("txt2").textContent =  encriptar(entrada.value);
//     console.log(entrada.value);
    
// }

function uiDesencriptar () {
    ocultar();
    var texto = document.querySelector("#entrada").value;
    var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.getElementById("txt2").textContent = textoCifrado;
}


// function copyToClipBoard() {

//     var content = document.getElementById('#txt2');
    
//     content.select();
//     document.execCommand('copy');

//     alert("Copied!");
// }


function copyToClipBoard() {
    /* Get the text field */
    var entrada  = document.querySelector("#entrada");
    entrada.value = "";
    var copyText = document.getElementById("txt2");
  
    console.log(copyText);
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
    /* For mobile devices */
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
  
    /* Alert the copied text */
    // alert("Copied the text: " + copyText.value);
  }