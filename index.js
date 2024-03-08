const fecha = document.querySelector('#fecha'); // Llamará la fecha
const lista = document.querySelector('#lista'); // Lamará a los elementos UL
const elemento = document.querySelector('#elemento'); //
const input = document.querySelector('#input'); // Llamará al agregar tarea
const botonEnter = document.querySelector('#boton-enter'); //Llamará al icono "+"


const check = 'fa-check-circle';
const uncheck = 'fa-circle';
const lineThrough = 'line-through';



let id = 0;// para que inicie en 0 cada tarea tendra un id diferente



// funcion de agregar tarea
function agregarTarea(tarea,id,realizado,eliminado) { // Le paso 4 parámetros debido a cuando creo una tarea, se le va a enviar el nombre de la tarea, su id, el estado de si está realizado o terminado

  if(eliminado) {return} // si eliminado es true, nada de las líneas inferiores de la función se ejecutará

  const REALIZADO = realizado ? check : uncheck; // si realizado es verdadero check si no está realizado, marca el uncheck

  const LINE = realizado ? lineThrough : ''; // si realizado es verdadero activa el lineThrough y si es falso, activa

  const elemento = `
                      <li id="elemento">
                      <i class="far ${REALIZADO}" data="realizado" id="${id}"></i>
                      <p class="text ${LINE}">${tarea}</p>
                      <i class="fas fa-trash de" data="eliminado" id="${id}"></i>
                      </li>
                    `
  lista.insertAdjacentHTML("beforeend",elemento) // El "insertAdjacentHTML" hará que al agregar un elemento a la lista, se pueda ir añadiendo gracias al DOM

}


// 3. funcion de Tarea Realizada
function tareaRealizada(element) {
  element.classList.toggle(check);     // Si detecta que el estado está en check, lo cambia a uncheck
  element.classList.toggle(uncheck);   // Si detecta que el estado está en check, lo cambia a uncheck
  element.parentNode.querySelector('.text').classList.toggle(lineThrough);  // Esto agregará la línea al momento de hacer clic
}


//4. Creación de función de Tarea Eliminada
function tareaEliminada(element){
   element.parentNode.parentNode.removeChild(element.parentNode); // Para remover todo el hijo, se coloca 2 parentNode debido a que del li pasará al ul
}



//1. Crear un evento para habilitar el boton y escuchar el enter
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



//2. Se creará los eventos de los botones, es decir que van a hacer cuando se haga clic en los iconos
/* En resumen, este código está escuchando clics en un elemento HTML, obtiene el valor del atributo data del elemento clicado
y luego realiza acciones específicas dependiendo de ese valor. Es común utilizar este patrón para manejar eventos de clic en elementos
HTML y realizar acciones específicas en función de qué elemento ha sido clicado. */

lista.addEventListener('click',function(event){
  const element = event.target;
  const elementData = element.attributes.data.value;
  console.log(elementData)

  if(elementData == 'realizado') {
      tareaRealizada(element) // Se envía el parámetro element
   }
  else if(elementData == 'eliminado') {
      tareaEliminada(element) // Se envía el parámetro element
  };
})
