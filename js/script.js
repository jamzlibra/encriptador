// Variables globales
const ingresoTexto = document.getElementById("ingresoTexto");
const botonEncriptar = document.getElementById("botonEncriptar");
const botonDesencriptar = document.getElementById("botonDesencriptar");
const botonCopiar = document.getElementById("botonCopiar");
const mensajeFinal = document.getElementById("mensajeFinal");
const munheco = document.getElementById("munheco");
const mensajeInfo = document.getElementById("mensajeInfo");
const rigth = document.getElementById("rigth");
const alertasContainer = document.getElementById("alertas-container"); // Contenedor de alertas

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
    const regex = /^[a-z\s]*$/; // Expresión regular para permitir solo letras minúsculas y espacios

    if (!regex.test(textoIngresado)) {
        mostrarAlerta("error", "Por favor, ingrese solo letras minúsculas y espacios.");
        // Eliminar los caracteres no permitidos (mayúsculas, números y símbolos)
        ingresoTexto.value = textoIngresado.replace(/[^a-z\s]/g, "");
    }
});

// Función para mostrar una alerta como un cuadro de texto
function mostrarAlerta(tipo, mensaje) {
    // Verificar si ya existe una alerta del mismo tipo
    const alertaExistente = document.querySelector(`.alerta-${tipo}`);
    if (alertaExistente) {
        // Si ya existe, actualizar el mensaje y salir de la función
        alertaExistente.textContent = mensaje;
        return;
    }

    // Crear elemento div para la alerta
    const alerta = document.createElement("div");
    alerta.classList.add("alerta"); // Aplicar clase de estilo para la alerta según el tipo
    alerta.classList.add(`alerta-${tipo}`); // Aplicar clase de estilo específico según el tipo

    // Agregar el mensaje de texto al contenido del div
    alerta.textContent = mensaje;

    // Agregar la alerta al contenedor de alertas
    alertasContainer.appendChild(alerta);

    // Mostrar el contenedor de alertas
    alertasContainer.classList.remove("oculto");

    // Mostrar la imagen de la alerta según el tipo
    mostrarImagenAlerta(`alerta${tipo}.svg`);

    // Eliminar la alerta después de 3 segundos
    setTimeout(() => {
        alerta.remove();
        // Ocultar el contenedor de alertas si no hay más alertas
        if (alertasContainer.childElementCount === 0) {
            alertasContainer.classList.add("oculto");
        }
        // Ocultar la imagen de la alerta
        ocultarImagenAlerta();
    }, 3000);
}

// Función para mostrar la imagen de alerta
function mostrarImagenAlerta(imagenSrc) {
    const alertaImagen = document.getElementById("alertaImagen");
    alertaImagen.src = `./imagenes/${imagenSrc}`;
    alertaImagen.alt = "Alerta";
    alertaImagen.style.display = "block";
}

// Función para ocultar la imagen de alerta
function ocultarImagenAlerta() {
    const alertaImagen = document.getElementById("alertaImagen");
    alertaImagen.style.display = "none";
}

// Evento de clic en el botón "Encriptar"
botonEncriptar.addEventListener("click", () => {
    const textoIngresado = ingresoTexto.value.toLowerCase();

    // Validar si se ha ingresado texto
    if (textoIngresado.trim() === "") {
        mostrarAlerta("advertencia", "Por favor, ingrese un texto antes de encriptar.");
        return;
    }

    // Encriptar el texto ingresado y mostrar el resultado
    const textoEncriptado = encriptar(textoIngresado);
    remplace(textoEncriptado);
    mostrarAlerta("exito", "Texto encriptado correctamente.");
});

// Evento de clic en el botón "Desencriptar"
botonDesencriptar.addEventListener("click", () => {
    const textoIngresado = ingresoTexto.value.toLowerCase();

    // Validar si se ha ingresado texto
    if (textoIngresado.trim() === "") {
        mostrarAlerta("advertencia", "Por favor, ingrese un texto antes de desencriptar.");
        return;
    }

    // Desencriptar el texto ingresado y mostrar el resultado
    const textoDesencriptado = desencriptar(textoIngresado);
    remplace(textoDesencriptado);
    mostrarAlerta("exito", "Texto desencriptado correctamente.");
});

// Evento de clic en el botón "Copiar"
botonCopiar.addEventListener("click", () => {
    let texto = mensajeFinal.innerHTML;
    navigator.clipboard.writeText(texto);
    mostrarAlerta("exito", "Texto copiado al portapapeles correctamente.");

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
