

const d = document; 
const textArea = d.querySelector(".form_input");
const imagenMuñeco = d.querySelector(".result_img");
const loaderLogo = d.querySelector(".loader")
const resultadoTitle = d.querySelector(".result_title");
const resultadoText = d.querySelector(".result_text");
const botonEncriptar = d.querySelector(".form_btn");
const botonDesencriptar = d.querySelectorAll(".form_btn");
const botonCopiar = d.querySelector(".result_btn");

/* 
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
 */

const llaves = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
]; 

//Función Encriptar
function encriptarMensaje(mensaje){
     let mensajeEncriptado = ""; 
    for (let i = 0; i < mensaje.length; i++) {
        let letra = mensaje[i];
        let encriptada = letra;
        for (let j = 0; j < llaves.length; j++) {
            if (letra === llaves [j][0]) {
                encriptada = llaves[j][1]; //Remplaza la letra por su equivalente encriptado
                break; //Si encuentra la letra correspondiente, termina el bucle 
            }
        }
        mensajeEncriptado += encriptada;
    }
    return mensajeEncriptado;
}

 
//Función Desencriptar
function desencriptarMensaje(mensaje){
    let mensajeDesencriptado = mensaje; 

    for(let i = 0; i < llaves.length; i++){
        let regex = new RegExp(llaves[i][1], 'g'); 
        mensajeDesencriptado = mensajeDesencriptado.replace(regex, llaves[i][0]); 
    }
    return mensajeDesencriptado;
}


//Ocultar elementos dinamicamente
textArea.addEventListener("input", (e)=>{
    imagenMuñeco.style.display = "none";
    loaderLogo.classList.remove("hidden");
    resultadoTitle.textContent = "Capturando Mensaje";
    resultadoText.textContent = "";
});

//Función del botón Encriptar
botonEncriptar.addEventListener("click", (e)=>{

    e.preventDefault();
    let mensaje = textArea.value.toLowerCase(); 
    let mensajeEncriptado = encriptarMensaje(mensaje);
    resultadoText.textContent = mensajeEncriptado; 
    botonCopiar.classList.remove("hidden");
    resultadoTitle.textContent = "Mensaje Encriptado";


});


//Función del botón Desencriptar
botonDesencriptar[1].addEventListener("click",(e)=>{
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase(); 
    let mensajeDesencriptado = desencriptarMensaje(mensaje);
    resultadoText.textContent = mensajeDesencriptado; 
    botonCopiar.classList.remove("hidden");
    resultadoTitle.textContent = "Mensaje Desencriptado";
    
});

//Botón Copiar
botonCopiar.addEventListener("click", ()=>{
    let textoCopiado = resultadoText.textContent; 
    navigator.clipboard.writeText(textoCopiado).then(()=>{
        imagenMuñeco.style.display = "block";
        loaderLogo.classList.add("hidden");
        resultadoTitle.textContent = "Mensaje Copiado"; 
        botonCopiar.classList.add("hidden");
    })
}); 