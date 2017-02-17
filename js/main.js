var lista=document.getElementById("lista");

function aniadirTarea()
{
	var tarea=document.getElementById("tarea");
	if(tarea.value.length==0){
		alert("Debe ingresar Tarea");
	}
	else{
		crearNodos(lista,tarea.value);
	}
	tarea.value="";
	tarea.focus();
}
function crearNodos(lista,tareaInput)
{
	var div=document.createElement("div");
	//div.className="checkbox";
	var span=document.createElement("span");
	var checkbox=document.createElement("input");
	checkbox.type="checkbox";
	var icono=document.createElement("i");
	//checkbox.type="checkbox";
	
	
	icono.className="fa , fa-trash-o , pull-right";
	div.appendChild(checkbox);
	span.innerHTML=tareaInput;
	div.appendChild(span);
	div.appendChild(icono);
	lista.appendChild(div);

	icono.addEventListener('click', eliminarNodos);
	checkbox.addEventListener('click',check);
}
function eliminarNodos(evt){
	var elemento=evt.target.parentNode;
	//elemento.parentNode->id lista
	lista.removeChild(elemento);
}
function check(evt){
	//spam
	var hijo=evt.target.nextSibling;
	//console.log(hijo);
	if(evt.target.checked){
		hijo.setAttribute("style","text-decoration: line-through");

	}else{
		hijo.setAttribute("style","text-decoration: none");
	}
}