
//Declaración de variables
console.log("Bienvenido al gestor de tareas");
let tareas = [];
let tareasCompletadas = 0;
let tareasPendientes = 0;
let tareasEliminadas = 0;
let tareasTotales = 0;

// Función para mostrar el menú
// y manejar la interacción con el usuario
function menu() {
    console.log("Bienvenido al gestor de tareas");
    console.log("1. Agregar tarea");
    console.log("2. Mostrar tareas");
    console.log("3. Eliminar tarea");
    console.log("4. Marcar tarea como completada");
    console.log("5. Salir");
    let opcion = parseInt(prompt("Seleccione una opción:"));

    while (opcion !== 5) {
        switch (opcion) {
            case 1:
                agregarTarea();
                break;
            case 2:
                mostrarTareas();
                break;
            case 3:
                eliminarTarea();
                break;
            case 4:
                marcarComoCompletada();
                break;
            default:
                console.log("Opción inválida.");
        }
        console.log("Seleccione una opción:");
        opcion = parseInt(prompt("Seleccione una opción:"));
    }
}

// Funciones para manejar las tareas
// Agregar tarea
function agregarTarea() {
    let tarea = prompt("Ingrese la tarea que desea agregar:");
    if (tarea === "") {
        console.log("No se puede agregar una tarea vacía.");
        return;
    }
    if (tareas.includes(tarea)) {
        console.log("La tarea ya existe.");
        return;
    }
    if (tareas.length >= 10) {
        console.log("No se pueden agregar más de 10 tareas.");
        return;
    }
    tareas.push(tarea);
    tareasTotales++;
    tareasPendientes++;
    console.log(`Tarea agregada: ${tarea}`);
}

//función para eliminar tarea
function eliminarTarea() {
    let tarea = prompt("Ingrese la tarea que desea eliminar:");
    let indice = tareas.indexOf(tarea);
    if (indice === -1) {
        console.log("La tarea no existe.");
        return;
    }
    tareas.splice(indice, 1);
    tareasEliminadas++;
    tareasTotales--;
    console.log(`Tarea eliminada: ${tarea}`);
}

// Función para marcar tarea como completada
// Se le pide al usuario que ingrese la tarea a completar
function marcarComoCompletada() {
    let tarea = prompt("Ingrese la tarea que desea marcar como completada:");
    let indice = tareas.indexOf(tarea);
    if (indice === -1) {
        console.log("La tarea no existe.");
        return;
    }
    tareas[indice] = `${tarea} (completada)`;
    tareasCompletadas++;
    tareasPendientes--;
    console.log(`Tarea marcada como completada: ${tarea}`);
    console.log(`Tarea completada: ${tarea}`);
}

// Función para mostrar las tareas
// Se muestran las tareas actuales, completadas y pendientes
function mostrarTareas() {
    if (tareas.length === 0) {
        console.log("No hay tareas.");
        return;
    }
    for (let indice = 0; indice < tareas.length; indice++) {
        console.log(`${indice + 1}. ${tareas[indice]}`);

    }
    console.log(`Total de tareas: ${tareas.length}`);

    console.log(`Tareas completadas: ${tareasCompletadas}`);
    console.log(`Tareas pendientes: ${tareasPendientes}`);
    console.log(`Tareas eliminadas: ${tareasEliminadas}`);
    console.log(`Tareas totales: ${tareasTotales}`);

    console.log("Gracias por usar el gestor de tareas.");
    console.log("Hasta luego.");
}

menu();