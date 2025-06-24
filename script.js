function agregarComentario() {
    let nombre = document.getElementById("nombre").value;
    let comentario = document.getElementById("comentario").value;

    // Crear un objeto con el nombre y el comentario
    let nuevoComentario = {
        nombre: nombre,
        texto: comentario,
        fecha: new Date().toLocaleString()
    };

    // Obtener comentarios existentes (si los hay)
    let comentariosGuardados = JSON.parse(localStorage.getItem("comentarios")) || [];

    // Agregar el nuevo comentario a la lista
    comentariosGuardados.push(nuevoComentario);

    // Guardar la lista actualizada en LocalStorage
    localStorage.setItem("comentarios", JSON.stringify(comentariosGuardados));

    // Mostrar los comentarios en la página
    let comentariosDiv = document.getElementById("comentarios");
    comentariosDiv.innerHTML = ""; // Limpiar los comentarios anteriores
    comentariosGuardados.forEach(comentario => {
        let divComentario = document.createElement("div");
        divComentario.classList.add("comentario");
        divComentario.innerHTML = `<strong>${comentario.nombre}:</strong> ${comentario.texto} <span class="fecha">(${comentario.fecha})</span>`;
        comentariosDiv.appendChild(divComentario);
    });

    // Limpiar los campos
    document.getElementById("nombre").value = "";
    document.getElementById("comentario").value = "";
}

// Cargar los comentarios al cargar la página
window.onload = function() {
    // ... (código para cargar los comentarios existente, igual al anterior)
};
