//TODO LIST

// 1. DEFINIR. Qué queremos??
// Necesitamos una web con un input y un botón, que al introducir una tarea, se añada a una lista
// Proceso: usuario introduce valor -> pulsa botón->añadimos elemento a la lista

// 2. TAREAS
// ->COMPLETAR HTML(commit/git)
// -MONTAR BASE JS
// -RELLENA FUNCIONES


//VARIABLES
//Con qué elementos del HTML voy a interaccionar?
//Botón
//Input
//Listado para enganchar items -> ul

var enterButton = document.getElementById('enter');
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");

//FUNCTIONS
function addListAfterClick(){
    if (input.value.length> 0){//longitud del input major que 0
        createListElement();
    }
}
//ha de cumplir les dues condicions. El event.which===13 reserca
function addListAfterKeypress(event){
    if (input.value.leght>0 && event.which === 13){
        createListElement();
    }
}
function createListElement(){
    //crear elemento, nuevo item
    var li = document.createElement('li');
    //Añadimos clase
    li.className = "list-group-item";
    //Enganchamos el texto(la tarea)
    li .appendChild(document.createTextNode(input.value));
    //añadimos el elemento en el ul
    ul.appendChild(li);
    //logica

    //resultado

}

//EVENTS
enterButton.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);//quan algun apreti una tecla es farà servir la funció del contingut del input