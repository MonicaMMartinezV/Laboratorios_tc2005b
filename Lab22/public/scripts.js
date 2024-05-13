// Obtener el botón de editar y el modal
var editButton = document.getElementById("editButton");
var editModal = document.getElementById("editModal");

// Obtener el botón de cerrar el modal
var closeButton = document.getElementsByClassName("close")[0];

// Mostrar el modal al hacer clic en el botón de editar
editButton.onclick = function() {
  editModal.style.display = "block";
}

// Cerrar el modal al hacer clic en la X
closeButton.onclick = function() {
  editModal.style.display = "none";
}

// Cerrar el modal al hacer clic fuera de él
window.onclick = function(event) {
  if (event.target == editModal) {
    editModal.style.display = "none";
  }
}
