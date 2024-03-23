document.addEventListener("DOMContentLoaded", function() {
    const urlInput = document.getElementById("url");
    const formatoSelect = document.getElementById("formato");
    const mensaje = document.getElementById("mensaje");
    const descargarBtn = document.getElementById("descargar");

    descargarBtn.addEventListener("click", function() {
        const url = urlInput.value;
        const formato = formatoSelect.value;

        if (!url.trim()) {
            mensaje.textContent = "Por favor, ingrese la URL del video.";
            return;
        }

        // Certificación de descarga
        const confirmacion = confirm(`¡Atención!\nEste programa está por descargar un video de YouTube. Asegúrate de tener los derechos necesarios para descargar y utilizar el contenido.\n\n¿Deseas continuar con la descarga del video?`);
        if (!confirmacion) {
            mensaje.textContent = "Descarga cancelada.";
            return;
        }

        mensaje.textContent = "Descargando...";
        setTimeout(function() {
            mensaje.textContent = "Descarga completada!";
        }, 2000); // Simular una descarga de 2 segundos
    });
});
