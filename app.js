/* LETRAS EN MINUSCULAS SIN ACENTOS Y SIN CARACTER ESPECIAL  */
document.getElementById('textareEncriptador').addEventListener('input', function(event) {
    let textoOriginal = this.value;  
    let textoModificado = textoOriginal.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    this.value = textoModificado;
});

/* BOTON ECNCRIPTAR */
function encriptar() {
    let encriptadoUsuario = document.querySelector("#textareEncriptador").value;
    let imagenBlock = document.querySelector("#imagenBlock");
    imagenBlock.style.display = "none";
    let textareaDesencriptador = document.querySelector("#textareaDesencriptador");
    textareaDesencriptador.style.display = "block";

    let vuelta = 0;
    let texto = "";
                /* WHILE ENCRIPTADO*/ 
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

        /* TEXTO ENCRIPTADO SALE EN TEXTAREADESENCRIPTTADOR */
    document.querySelector("#textareaDesencriptador").value = texto;
}
    
    /* BOTON DESENCRIPTAR */ 
function desencriptar() {
    let desencriptadoUsuario = document.querySelector("#textareEncriptador").value;
    let imagenBlock = document.querySelector("#imagenBlock");
    imagenBlock.style.display = "none";
    let textareaDesencriptador = document.querySelector("#textareaDesencriptador");
    textareaDesencriptador.style.display = "block";
    
   
    let textoEncriptado = document.querySelector("#textareEncriptador").value;

    let vuelta = 0;
    let textoOriginal = "";

    /* WHILE DE BOTON DESENCRIPTADOR  */
    while (vuelta < textoEncriptado.length) {
        
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
            
            textoOriginal += textoEncriptado[vuelta];
            vuelta += 1;
        }
    }

    /* DEVUELVE EL TEXTO DESENCRIPTADO EN TEXTAREADESENCRIPTADOR */
    document.querySelector("#textareaDesencriptador").value = textoOriginal;
}

/* FUNCION COPIAR  */
function copiar() {
     let textoDesencriptado = document.querySelector("#textareaDesencriptador").value;
     navigator.clipboard.writeText(textoDesencriptado)
    .then(() => {
     alert("texto copiado exitosamente")
        });

}
