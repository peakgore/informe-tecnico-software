
// Obtener el formulario
const formulario = document.getElementById("formularioCita");

// Obtener el área donde aparecerán los mensajes
const mensaje = document.getElementById("mensaje");


// Evento que se ejecuta cuando el usuario intenta enviar el formulario

formulario.addEventListener("submit", function(event) {

    // Evitar que la página se recargue
    event.preventDefault();


    // Obtener los valores ingresados

    const nombre = document.getElementById("nombre").value.trim();

    const correo = document.getElementById("correo").value.trim();

    const telefono = document.getElementById("telefono").value.trim();

    const servicio = document.getElementById("servicio").value;

    const fecha = document.getElementById("fecha").value;

    const hora = document.getElementById("hora").value;

    const observaciones =
        document.getElementById("observaciones").value.trim();


    // Limpiar mensajes anteriores

    mensaje.className = "mensaje";

    mensaje.textContent = "";


    // Validar campos obligatorios

    if (
        nombre === "" ||
        correo === "" ||
        telefono === "" ||
        servicio === "" ||
        fecha === "" ||
        hora === ""
    ) {

        mensaje.textContent =
            "Por favor complete todos los campos obligatorios.";

        mensaje.classList.add("error");

        return;
    }


    // Validar correo electrónico

    const formatoCorreo =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formatoCorreo.test(correo)) {

        mensaje.textContent =
            "Ingrese un correo electrónico válido.";

        mensaje.classList.add("error");

        return;
    }


    // Validar teléfono

    if (telefono.length < 7) {

        mensaje.textContent =
            "Ingrese un número de teléfono válido.";

        mensaje.classList.add("error");

        return;
    }


    // Si todas las validaciones son correctas

    mensaje.textContent =
        "La solicitud de cita fue registrada correctamente. Nos comunicaremos con usted para confirmar la cita.";

    mensaje.classList.add("exito");


    // Limpiar el formulario

    formulario.reset();

});