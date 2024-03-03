## Descripción del Proyecto

Este proyecto es parte del Reto Número 1 del programa Oracle Next Education - Alura Latam. Se trata de un encriptador simple desarrollado con HTML5, CSS y JavaScript.

La página web "Encriptador One" es una herramienta diseñada para encriptar y desencriptar texto utilizando un algoritmo de sustitución de caracteres. Los usuarios pueden ingresar texto en un área de texto dedicada, y luego encriptar o desencriptar ese texto según su preferencia. El proceso de encriptación reemplaza ciertos caracteres del texto ingresado con secuencias específicas definidas por el usuario, y el proceso de desencriptación revierte este proceso para restaurar el texto original.

### Características principales:

- Encriptación de texto: Permite a los usuarios ingresar texto y encriptarlo utilizando un algoritmo de sustitución de caracteres predefinido.

- Desencriptación de texto: Permite a los usuarios ingresar texto encriptado y desencriptarlo para restaurar el texto original.

- Restricciones de entrada: La página impone restricciones sobre el tipo de caracteres permitidos en el texto de entrada, limitándolo a letras minúsculas y sin acentos.

- Interfaz intuitiva: La interfaz de usuario es simple e intuitiva, con áreas de texto para ingresar el texto y botones claros para realizar acciones de encriptación, desencriptación y copiado del texto.

- Funcionalidad de copiado: Proporciona la capacidad de copiar el texto encriptado o desencriptado al portapapeles del usuario para facilitar su uso posterior.

### Método de Encriptación

El encriptador utiliza las siguientes "llaves" de encriptación:

- La letra "e" es convertida a "enter".
- La letra "i" es convertida a "imes".
- La letra "a" es convertida a "ai".
- La letra "o" es convertida a "ober".
- La letra "u" es convertida a "ufat".

### Restricciones de uso

Solo pueden encribir textos en minusculas y no pueden ingresar numeros para encriptar esta es la version 1 
intentare realizar otro encriptador con mejoras y ocupando otro tipo de cifrado

Este algoritmo de sustitución reemplaza cada ocurrencia de las letras especificadas por su respectivo valor asignado.

## Registro de versiones:
### Version 2.0.0
- **Versión 2.0.0** (03/03/2024): Implementación de mejoras y correcciones:
  - Se agregó funcionalidad para mostrar mensajes de alerta personalizados.
  - Se ajustaron los estilos CSS para adaptar la página a dispositivos móviles.
  - Se añadieron imágenes de alerta para diferentes tipos de mensajes.
  - Se corrigieron errores relacionados con la visualización de la imagen de alerta.
  - Se modificaron los colores de las alertas según su tipo (éxito, advertencia, error).
  - Se agregaron mensajes de confirmación para mostrar cuando se encripta o desencripta el texto.
  - Se añadieron restricciones de entrada para permitir solo letras minúsculas y espacios.
  - Se mejoró el diseño y la disposición de los elementos en la página.
  - Se optimizó el código JavaScript para mejorar el rendimiento y la legibilidad.
  - Se actualizó el diseño responsivo para garantizar una experiencia consistente en dispositivos móviles.
  - Se agregó el uso de la propiedad `flex-grow` para que el textarea ocupe el área restante en altura en dispositivos móviles.

### Versiones anteriores:
- **Versión 1.0.0** (29/02/2024): Implementación inicial de la funcionalidad básica de encriptación y desencriptación de texto.
- **Versión 1.0.1** (02/02/2024): Mejora de aspectos visuales para dispositivos con pantallas menores a 500px.

## Autor
- [Julio Macias](https://github.com/jamzlibra)
