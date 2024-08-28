const textArea = document.querySelector(".ctr__encriptador__texto");
const mensaje = document.querySelector(".res__encriptador__mensaje");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"
// Espacio " " es convertida para "delwchd"
// Punto "." es convertida para "plthade"
// Coma "," es convertida para "gfdter"

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar (stringEncriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"], [" ", "delwchd"], [".", "plthade"], [",", "gfdter"]];

    // El método toLower.Case() devuelve el valor en minúscula de la cadena que realiza la llamada.
    stringEncriptado = stringEncriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptado
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = "";
}

function desencriptar (stringDesencriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"], [" ", "delwchd"], [".", "plthade"], [",", "gfdter"]];
    // El método toLower.Case() devuelve el valor en minúscula de la cadena que realiza la llamada.
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptado.includes(matrizCodigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptado
}

function btnCopiar() {
    // Selecciona el contenido del textarea con la clase "mensaje"
    mensaje.select();
    mensaje.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Copia el texto seleccionado al portapapeles
    document.execCommand("copy");

    // Limpia el área de texto después de copiar
    mensaje.value = "";
    //alert("Texto copiado al portapapeles!");
}