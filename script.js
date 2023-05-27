function validarTexto(texto) {
    let caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;
    let mayusculas = /[A-Z]/g;
    let vacio = "";
  
    if (texto.match(mayusculas) || texto.match(caracteres)) {
      alert("No se permiten caracteres especiales ni mayúsculas");
      return true;
    } else if (texto === vacio) {
      alert("Ingrese un mensaje para encriptar");
      return true;
    } else {
      return false;
    }
  }
  
  function encriptar(textoIngresado) {
    const reglas = { "e": "enter", "i": "imes", "a": "ai", "o": "ober", "u": "ufat" };
    let encriptado = "";
    for (let i = 0; i < textoIngresado.length; i++) {
      let letra = textoIngresado[i];
      if (reglas.hasOwnProperty(letra)) {
        encriptado += reglas[letra];
      } else {
        encriptado += letra;
      }
    }
    return encriptado;
  }
  
  function desencriptar(textoIngresado) {
    const reglas = { "enter": "e", "imes": "i", "ai": "a", "ober": "o", "ufat": "u" };
    let desencriptado = "";
    let palabra = "";
    for (let i = 0; i < textoIngresado.length; i++) {
      let letra = textoIngresado[i];
      if (letra.match(/[a-z]/i)) {
        palabra += letra;
        if (i === textoIngresado.length - 1) {
          desencriptado += palabra;
          palabra = "";
        }
      } else {
        if (reglas.hasOwnProperty(palabra)) {
          desencriptado += reglas[palabra];
        } else {
          desencriptado += palabra;
        }
        desencriptado += letra;
        palabra = "";
      }
    }
    return desencriptado;
  }
function validarTexto (texto) {
    
    let caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;
    let mayusculas = /[A-Z]/g;  
    let vacio="";  
      
    if(texto.match(mayusculas)||texto.match(caracteres)){
        alert("No se permiten caracteres especiales ni mayusculas");
        return true; 
    }else if(texto==vacio){
       alert("Ingrese un mensaje para encriptar");
        return true;
   }else {
        return false;
    }
}


let btnEncriptar = document.querySelector("#btn-encriptar");

btnEncriptar.addEventListener("click",function ()  {
    let textInput = document.querySelector("#input-texto").value;
    let textoIngresado = textInput;
   
    if (validarTexto (textoIngresado) == false) {       
        let Encriptado = encriptar(textoIngresado);
        let resultado = document.querySelector("#msg");
        resultado.value = Encriptado;
    } else {        
        textInput = "";     
     
    }
               
})


const reglas = { "e":"enter","i":"imes","a":"ai","o":"ober","u":"ufat"};

function encriptar (textoIngresado) {
    let Encriptado = "";
    for (const obj in reglas) {
        Encriptado = textoIngresado.replaceAll(obj,reglas[obj]);
        textoIngresado = Encriptado;        
    }
    return (Encriptado);
}


let btnCopiar = document.querySelector("#btn-copy");

btnCopiar.addEventListener("click",function(){        
    let Copiado = document.querySelector("#msg").value;
    navigator.clipboard.writeText(Copiado);
    document.querySelector("#input-texto").value="";

});

let btnDesencriptar = document.querySelector("#btn-desencriptar");

btnDesencriptar.addEventListener("click", function(){
    let textoIngresado = document.querySelector("#input-texto").value;
    let Desencriptado = desencriptar(textoIngresado);

    let resultado = document.querySelector("#msg");
    resultado.value = Desencriptado;
})



function desencriptar (textoIngresado) {
    let Encriptado = "";
    for (const obj in reglas) {
        Encriptado = textoIngresado.replaceAll(reglas[obj],obj);
        textoIngresado = Encriptado;        
    }
    return (Encriptado);
}

  
  function copyToClipboard() {
    const outputText = document.getElementById('msg');
    outputText.select();
    outputText.setSelectionRange(0, 99999); // Para dispositivos móviles
  
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
  }
  
  document.getElementById('btn-encriptar').addEventListener("click", function () {
    let textInput = document.getElementById('input-texto').value;
    let textoIngresado = textInput;
  
    if (!validarTexto(textoIngresado)) {
      let encriptado = encriptar(textoIngresado);
      document.getElementById('msg').value = encriptado;
    } else {
      textInput = "";
    }
  });
  
  document.getElementById('btn-copy').addEventListener("click", function () {
    let copiado = document.getElementById('msg').value;
    navigator.clipboard.writeText(copiado);
    document.getElementById('input-texto').value = "";
  });
  
  document.getElementById('btn-desencriptar').addEventListener("click", function () {
    let textoIngresado = document.getElementById('input-texto').value;
    let desencriptado = desencriptar(textoIngresado);
    document.getElementById('msg').value = desencriptado;
  });
  
  document.getElementById('input-texto').addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      let textInput = document.getElementById('input-texto').value;
      let textoIngresado = textInput;
  
      if (!validarTexto(textoIngresado)) {
        let encriptado = encriptar(textoIngresado);
        document.getElementById('msg').value = encriptado;
      } else {
        textInput = "";
      }
    }
  });
  