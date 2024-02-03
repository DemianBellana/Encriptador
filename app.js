function encriptar() {
    let encriptadoUsuario = document.querySelector("#textareEncriptador").value;
    let imagenBlock = document.querySelector("#imagenBlock");
    imagenBlock.style.display = "none";
    let textareaDesencriptador = document.querySelector("#textareaDesencriptador");
    textareaDesencriptador.style.display = "block";

    let vuelta = 0;
    let texto = "";

    while (vuelta != encriptadoUsuario.length) {
        if (encriptadoUsuario[vuelta] == "a") {
            texto = texto + "ai";
        } else if (encriptadoUsuario[vuelta] == "e") {
            texto += "enter";
        } else if (encriptadoUsuario[vuelta] == "i") {
            texto += "imes";
        } else if (encriptadoUsuario[vuelta] == "o") {
            texto += "ober";
        } else if (encriptadoUsuario[vuelta] == "u") {
            texto += "ufat";
        } else {
            texto += encriptadoUsuario[vuelta];
        }
        vuelta = vuelta + 1;
    }

    // Aquí puedes hacer algo con el texto encriptado, como mostrarlo en otro lugar de tu página.
    // Por ejemplo:
    document.querySelector("#textareaDesencriptador").value = texto;
}
    


function desencriptar() {
    let desencriptadoUsuario = document.querySelector("#textareEncriptador").value;
    let imagenBlock = document.querySelector("#imagenBlock");
    imagenBlock.style.display = "none";
    let textareaDesencriptador = document.querySelector("#textareaDesencriptador");
    textareaDesencriptador.style.display = "block";
    
    // Obtén el texto encriptado desde el textarea
    let textoEncriptado = document.querySelector("#textareEncriptador").value;

    // Inicializa las variables necesarias
    let vuelta = 0;
    let textoOriginal = "";

    // Itera a través del texto encriptado
    while (vuelta < textoEncriptado.length) {
        // Verifica las combinaciones encriptadas y restáuralas
        if (desencriptadoUsuario[vuelta] == "a" && textoEncriptado[vuelta + 1] == "i") {
            textoOriginal += "a";
            vuelta += 2;
        } else if (desencriptadoUsuario[vuelta] == "e" && textoEncriptado[vuelta + 1] == "n" && textoEncriptado[vuelta + 2] == "t" && textoEncriptado[vuelta + 3] == "e" && textoEncriptado[vuelta + 4] == "r") {
            textoOriginal += "e";
            vuelta += 5;
        } else if (desencriptadoUsuario[vuelta] == "i" && textoEncriptado[vuelta + 1] == "m" && textoEncriptado[vuelta + 2] == "e" && textoEncriptado[vuelta + 3] == "s") {
            textoOriginal += "i";
            vuelta += 4;
        } else if (desencriptadoUsuario[vuelta] == "o" && textoEncriptado[vuelta + 1] == "b" && textoEncriptado[vuelta + 2] == "e" && textoEncriptado[vuelta + 3] == "r") {
            textoOriginal += "o";
            vuelta += 4;
        } else if (desencriptadoUsuario[vuelta] == "u" && textoEncriptado[vuelta + 1] == "f" && textoEncriptado[vuelta + 2] == "a" && textoEncriptado[vuelta + 3] == "t") {
            textoOriginal += "u";
            vuelta += 4;
        } else {
            // Si no es una combinación encriptada, simplemente añádelo al texto original
            textoOriginal += textoEncriptado[vuelta];
            vuelta += 1;
        }
    }

    // Muestra el texto desencriptado
    document.querySelector("#textareaDesencriptador").value = textoOriginal;
}

function copiar() {
    let textoDesencriptado = document.querySelector("#textareaDesencriptador").value;

    // Utiliza el método writeText para copiar el contenido al portapapeles
    navigator.clipboard.writeText(textoDesencriptado)

    alert("Texto copiado Exitosamente")
}
