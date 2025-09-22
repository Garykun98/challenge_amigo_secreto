let listaDeAmigos = [];

/**
 * Agrega un nuevo amigo a la lista de amigos.
 * Se valida que el nombre no esté vacío antes de agregarlo.
 * Luego actualiza la vista con la lista actualizada.
 */
function agregarAmigo() {
  let nombreAmigo = document.getElementById("nombreAmigo").value;

  // Validar que el nombre no esté vacío
  if (nombreAmigo.trim() === "") {
    alert("Por favor, ingresa un nombre para agregar.");
  } else {
    // Añadir el amigo a la lista
    listaDeAmigos.push(nombreAmigo);
    // Limpiar el campo de entrada
    document.querySelector("#nombreAmigo").value = "";
    // Actualizar la vista con la lista de amigos
    mostrarAmigos();
  }
}

/**
 * Muestra la lista de amigos en el contenedor HTML.
 * Crea un <li> para cada amigo y los agrega a la lista.
 */
function mostrarAmigos() {
  let contenedorAmigos = document.querySelector("#contenedorAmigos");
  contenedorAmigos.innerHTML = ""; // Limpiar la lista actual

  // Recorrer la lista de amigos y crear un <li> por cada amigo
  for (let i = 0; i < listaDeAmigos.length; i++) {
    const amigo = listaDeAmigos[i];
    let elementoLista = document.createElement("li");
    elementoLista.textContent = amigo;
    contenedorAmigos.appendChild(elementoLista);
  }
}

/**
 * Realiza un sorteo aleatorio para seleccionar un amigo de la lista.
 * Asegura que haya al menos un amigo antes de realizar el sorteo.
 */
function sortearAmigo() {
  let cantidadDeAmigos = listaDeAmigos.length;

  // Verificar si la lista está vacía
  if (cantidadDeAmigos === 0) {
    alert("No hay amigos en la lista. Por favor, agrega al menos uno.");
  } else {
    // Seleccionar un índice aleatorio de la lista
    let indiceAleatorio = Math.floor(Math.random() * cantidadDeAmigos);
    let resultadoSorteo = document.querySelector("#resultadoSorteo");
    resultadoSorteo.innerHTML = "El amigo seleccionado es: " + listaDeAmigos[indiceAleatorio];
  }
}
