const textarea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");


//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"


function botonEncriptar(){
    const textoEncriptado = encriptar(textarea.value);
    mensaje.value = textoEncriptado
}

function encriptar(campoEncriptado){
    let parametros = [["e","enter"],["i","imes"],["a","ai"], ["o", "ober"], ["u", "ufat"]];
    
    campoEncriptado = campoEncriptado.tolowercase();

    for(let i = 0; i  < parametros.length; i ++(){
        if(campoEncriptado.includes(parametros[i][0])){
            campoEncriptado = campoEncriptado.replaceall(parametros[i][0], parametros[i][1])
        }
    }
    return campoEncriptado;

}



