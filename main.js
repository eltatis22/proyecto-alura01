const textarea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const imagenMensaje = document.querySelector(".imagen-mensaje");

function botonEncriptar() {
    const textoEncriptado = encriptar(textarea.value);
    mensaje.value = textoEncriptado;
    mostrarImagen(false); 
}

function encriptar(campoEncriptado) {
    let parametros = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];

    campoEncriptado = campoEncriptado.toLowerCase();

    for (let i = 0; i < parametros.length; i++) {
        campoEncriptado = campoEncriptado.replaceAll(parametros[i][0], parametros[i][1]);
    }

    return campoEncriptado;
}

function botonDesencriptar() {
    const textoOriginal = textarea.value; 
    const textoDesencriptado = desencriptar(textoOriginal);
    mensaje.value = textoDesencriptado;
    mostrarImagen(textoDesencriptado === "");
}

function desencriptar(campoDesencriptado) {
    let parametros = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];

    campoDesencriptado = campoDesencriptado.toLowerCase();

    for (let i = 0; i < parametros.length; i++) {
        campoDesencriptado = campoDesencriptado.replaceAll(parametros[i][1], parametros[i][0]);
    }

    return campoDesencriptado;
}

function botonReiniciar() {
    location.reload();
}

function copiarTexto() {
    const texto = mensaje.value;
    if (texto.trim() === "") {
        alert("No hay texto para copiar.");
        return;
    }

    navigator.clipboard.writeText(texto)
        .then(() => {
            alert("Texto copiado al portapapeles.");
        })
        .catch((error) => {
            console.error("Error al copiar el texto: ", error);
        });
}

function mostrarImagen(mostrar) {
    if (mostrar) {
        imagenMensaje.classList.remove("hidden");
    } else {
        imagenMensaje.classList.add("hidden");
    }
}