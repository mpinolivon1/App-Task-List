const fecha = document.querySelector('#fecha'); // Llamará la fecha
const lista = document.querySelector('#lista'); // Lamará a los elementos UL
const elemento = document.querySelector('#elemento'); //
const input = document.querySelector('#input'); // Llamará al agregar tarea
const botonEnter = document.querySelector('#boton-enter'); //Llamará al icono "+"


const check = 'fa-check-circle';
const uncheck = 'fa-circle';
const lineThrough = 'line-through';


let LIST
let id // para que inicie en 0 cada tarea tendra un id diferente



// funcion de agregar tarea
function agregarTarea(tarea,id,realizado,eliminado) { // Le paso 4 parámetros debido a cuando creo una tarea, se le va a enviar el nombre de la tarea, su id, el estado de si está realizado o terminado
  const elemento = `
                      <li id="elemento">
                      <i class="far fa-circle co" data="realizado" id="0"></i>
                      <p class="text">${tarea}</p>
                      <i class="fas fa-trash de" data="eliminado" id="0"></i>
                      </li>
                  `
  lista.insertAdjacentHTML("beforeend",elemento) // El "insertAdjacentHTML" hará que al agregar un elemento a la lista, se pueda ir añadiendo gracias al DOM

}




// Crear un evento para habilitar el boton y escuchar el enter
botonEnter.addEventListener('click', ()=> { // Agregar un evento de clic al botón "+"
  const tarea = input.value // con el .value, sabré que es lo que contiene y se lo estaré pasando a la constante "tarea"
  if(tarea){ // Si es que existe la tarea, se agrega el "agregar tarea (función)"
      agregarTarea(tarea,id,false,false) // Al momento de crear una tarea se le enviarán 4 parámetros (nombre de la tarea, id, y los dos estados iniciales (false & false))
      input.value = ''; // Al colocar '', la propiedad value hará que una vez ingresado el texto, este se limpie automáticamente
      id++; // El id inicializará en 0 y esta línea hará que vaya aumentando el número de id
  }

})


document.addEventListener('keyup', function (event) { // Agregar un evento al momento de dar un enter
  if (event.key=='Enter'){
      const tarea = input.value
      if(tarea) {
          agregarTarea(tarea); // Si es que existe la tarea, se agrega el "agregar tarea (función)"
      input.value = ''; // Al colocar ' ', la propiedad value hará que una vez ingresado el texto, este se limpie automáticamente
      id++; // El id inicializará en 0 y esta línea hará que vaya aumentando el número de id
      }
  }
})
