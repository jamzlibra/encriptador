const ingresoTexto = document.getElementById("ingresoTexto");
const botonEncriptar = document.getElementById("botonEncriptar");
const botonDesencriptar = document.getElementById("botonDesencriptar");
const botonCopiar = document.getElementById("botonCopiar");
const mensajeFinal = document.getElementById("mensajeFinal");
const munheco = document.getElementById("munheco");
const mensajeInfo = document.getElementById("mensajeInfo");
const rigth = document.getElementById("rigth");

// Definir matriz de reemplazo
const remplazar = [
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"]
];

// Función para reemplazar caracteres según las reglas definidas
function remplace(nuevoValor) {
    mensajeFinal.innerHTML = nuevoValor;
    ingresoTexto.value = "";
    munheco.classList.add("oculto");
    munheco.style.display = "none";
    mensajeInfo.style.display = "none";
    botonCopiar.style.display = "block";
    rigth.classList.add("ajustar");
    mensajeFinal.classList.add("ajustar");
}

// Función para encriptar el texto ingresado
function encriptar(newText) {
    newText = newText.toLowerCase(); // Convertir a minúsculas
    for (let i = 0; i < remplazar.length; i++) {
        if (newText.includes(remplazar[i][0])) {
            newText = newText.replaceAll(remplazar[i][0], remplazar[i][1]);
        }
    }
    return newText;
}

// Función para desencriptar el texto ingresado
function desencriptar(newText) {
    for (let i = remplazar.length - 1; i >= 0; i--) {
        if (newText.includes(remplazar[i][1])) {
            newText = newText.replaceAll(remplazar[i][1], remplazar[i][0]);
        }
    }
    return newText;
}

// Evento de input para verificar el texto ingresado
ingresoTexto.addEventListener("input", () => {
    const textoIngresado = ingresoTexto.value;
    const regex = /^[a-z]*$/; // Expresión regular para verificar si solo hay letras minúsculas

    if (!regex.test(textoIngresado)) {
        alert("Por favor, ingrese solo letras minúsculas.");
        // Eliminar los caracteres no permitidos (mayúsculas y números)
        ingresoTexto.value = textoIngresado.replace(/[^a-z]/g, "");
    }
});

// Evento de clic en el botón "Encriptar"
botonEncriptar.addEventListener("click", () => {
    const textoIngresado = ingresoTexto.value.toLowerCase();

    // Validar si se ha ingresado texto
    if (textoIngresado.trim() === "") {
        alert("Por favor, ingrese un texto antes de encriptar.");
        return;
    }

    // Encriptar el texto ingresado y mostrar el resultado
    remplace(encriptar(textoIngresado));
});

// Evento de clic en el botón "Desencriptar"
botonDesencriptar.addEventListener("click", () => {
    const textoIngresado = ingresoTexto.value.toLowerCase();

    // Validar si se ha ingresado texto
    if (textoIngresado.trim() === "") {
        alert("Por favor, ingrese un texto antes de desencriptar.");
        return;
    }

    // Desencriptar el texto ingresado y mostrar el resultado
    remplace(desencriptar(textoIngresado));
});

// Evento de clic en el botón "Copiar"
botonCopiar.addEventListener("click", () => {
    let texto = mensajeFinal.innerHTML;
    navigator.clipboard.writeText(texto);
    alert("Texto copiado al portapapeles correctamente.");

    // Restaurar valores y estilos después de copiar
    mensajeFinal.innerHTML = "";
    ingresoTexto.value = "";
    munheco.classList.remove("oculto");
    mensajeInfo.style.display = "block";
    botonCopiar.style.display = "none";
    rigth.classList.remove("ajustar");
    mensajeFinal.classList.remove("ajustar");
    ingresoTexto.focus();
});
