const btn = document.querySelector('[data-form-btn]');

const createTask = (evento) => {
    evento.preventDefault(); // para no refrescar la pantalla
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    console.log(input.value);

    const list = document.querySelector("[data-list]")
    input.value = ''; // dejar el input vacio una vez realizada la accion

    const task = document.createElement("li");
    task.classList.add("card");

    const content = `<div>
        <i class="fas fa-check-square icon"></i>
        <span class="task"> ${value}</span>
        </div>
        <i class="fas fa-trask-alt trashIcon icon"></i>`
    task.innerHTML = content;

    list.appendChild(task);
    console.log(content);
}

console.log(btn);

// Arrow functions o funciones anonimas
btn.addEventListener("click", createTask);


