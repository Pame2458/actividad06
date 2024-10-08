// Referencias a elementos del DOM
const tareaInput = document.getElementById('nueva-tarea');
const agregarTarea = document.getElementById('agregarTarea');
const tareaList = document.getElementById('tarea-list');



// Función para agregar una nueva tarea
function agregar() {
    const tareaText = tareaInput.value.trim();

    if (tareaText !== "") {
        const tareaItem = document.createElement('li');
        tareaItem.classList.add('tarea-item');

        const tareaContent = document.createElement('span');
        tareaContent.classList.add('tarea-text');
        tareaContent.textContent = tareaText;

        const botonhecho = document.createElement('button');
        botonhecho.textContent = 'Hecho';
        botonhecho.addEventListener('click', () => {
            tareaItem.classList.toggle('completed');
        });

        const botoneliminar = document.createElement('button');
        botoneliminar.textContent = 'Borrar';
        botoneliminar.addEventListener('click', () => {
            tareaList.removeChild(tareaItem);
        });

        tareaItem.appendChild(tareaContent);
        tareaItem.appendChild(botonhecho);
        tareaItem.appendChild(botoneliminar);

        tareaList.appendChild(tareaItem);

        tareaInput.value = "";
    }
}

// Evento para agregar tarea al hacer clic en el botón
agregarTarea.addEventListener('click', agregar);

