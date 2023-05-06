

function Encriptar() {
    var textareaValue = document.querySelector("#textarea_Encriptador").value;
  
    if (textareaValue != '') {
        var div = document.querySelector("#divDesencriptador");

        // Reemplazamos todas las letras "a" por la letra "x"
        var nuevoContenido = textareaValue.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

        div.textContent = nuevoContenido;
        div.style.paddingTop = "5%";
        div.style.paddingBottom = "52%";
        div.style.color = "#495057";
        div.style.fontSize = "1.3em";

        var boton = document.querySelector('.boton_3');
        boton.style.display = 'block';

    }

}

function Desencriptar() {
    var textareaValue = document.querySelector("#textarea_Encriptador").value;
  
    if (textareaValue != '') {
        var div = document.querySelector("#divDesencriptador");
    
        // Reemplazamos todas las letras "a" por la letra "x"
        var nuevoContenido = textareaValue.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    
        div.textContent = nuevoContenido;
        div.style.paddingTop = "5%";
        div.style.paddingBottom = "52%";
        div.style.color = "#495057";
        div.style.fontSize = "1.3em";

    }
}

function copiar(){

    var div = document.querySelector("#divDesencriptador");
    var contenido = div.textContent;

    var textarea = document.createElement('textarea');
    textarea.value = contenido;
    
    document.body.appendChild(textarea);
    navigator.clipboard.writeText(textarea.value)
    document.body.removeChild(textarea);

}

