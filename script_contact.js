document.getElementById("formulario-contacto").addEventListener("submit", function (e) {
    e.preventDefault(); // Evita el envío real
    const alerta = document.getElementById("alerta-exito");

    // Mostrar la alerta
    alerta.classList.remove("d-none");

    // Opcional: resetear el formulario
    this.reset();
  });
