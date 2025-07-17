document.addEventListener('DOMContentLoaded', () => {
  // Obtenemos el formulario, el campo de texto y la lista
  const input = document.getElementById('nuevaTarea');
  const lista = document.getElementById('listaTareas');
  const btnAgregar = document.getElementById('btnAgregar');

  // Cuando se envíe el formulario
  btnAgregar.addEventListener('click', () => {

    const textoTarea = input.value.trim(); // Lo que escribió el usuario
    if (textoTarea === '') return; // Si está vacío, no hacemos nada

    // Creamos un nuevo elemento de la lista
    const li = document.createElement('li');

    //Creamos un elemento p para el texto de la tarea
    const parrafo = document.createElement('p');
    parrafo.textContent = textoTarea; // Asignamos el texto de la tarea

    li.appendChild(parrafo); // Agregamos el parrafo al elemento

    // Cuando se hace clic en "Eliminar", se borra esa tarea
  
    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'Eliminar';

    //El método de setAttribute nos permite establecer un atributo y pasarle sus valores
    btnEliminar.setAttribute("class", "btn btn-danger");

    btnEliminar.addEventListener('click', () => {
      lista.removeChild(li);
    });

    // Agregamos el botón al elemento de la lista
    li.appendChild(btnEliminar);

    // Agregamos la tarea a la lista en pantalla
    lista.appendChild(li);

    // Limpiamos el campo de texto
    input.value = '';
  });
});
