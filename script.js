// Evento submit funciona con el Form
const form = document.getElementById("formInput");
const listContainer = document.getElementById('list-container');
const inputText = document.querySelector('input[type = "text"]');
const stats = document.querySelector('.stats');
let contId = 0; 

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    addTask();
    inputText.focus();
    contId++;
    // console.log("evento");
});

listContainer.addEventListener('click', (e)=>{
    console.log(e.srcElement.nodeName);
    if(e.srcElement.nodeName == "INPUT"){//CUANDO SE HAGA CLICK EN INPUT Y SE ACTIVE EL CHECK ACTUALOZAMOS LOS TASK
        updateStats();
    }else if(e.srcElement.nodeName == "SPAN"){
        // e.srcElement.parentNode.id; LO QUE HACE ESTO ES PBTENER EL ID DEL ELEMENTO QUE HACEMOS CLICK
        listContainer.removeChild(document.getElementById(e.srcElement.parentNode.id));
    }
})

let addTask = ()=>{
    // con el innerHTML hay diferencia entre " = " y " += "
    let inputValue = inputText.value;
    listContainer.innerHTML += `
    <div class="task-container" id="${contId}">
        <label for="">
            <input type="checkbox" name="" id="">
            ${inputValue}
        </label>
        <span class="material-symbols-outlined">
            delete
        </span>
    </div>
    `;
    inputText.value="";
    updateStats();//cuando agreguemos una nueva palabra se debe actualizar los stats
}

let updateStats = () =>{
    let listTask = document.querySelectorAll('.task-container');
    let listCheckbox = document.querySelectorAll('input[type = "checkbox"]:checked');
    stats.innerHTML=`
    <p>
        Tareas pedientes: <span id="pendientes">${listTask.length - listCheckbox.length}</span> <br>
        Tareas completadas: <span id="completadas">${listCheckbox.length}</span>
    </p>
    `
}