( () => {
    const btn = document.querySelector('[data-form-btn]');

    const createTask = (evento) => {
        evento.preventDefault(); // para no refrescar la pantalla
        const input = document.querySelector("[data-form-input]");
        const value = input.value;

        const list = document.querySelector("[data-list]")
        input.value = ''; // dejar el input vacio una vez realizada la accion

        const task = document.createElement("li");
        task.classList.add("card");

        const taskContent = document.createElement('div');
    

        const titleTask = document.createElement('span');
        titleTask.classList.add('task');
        titleTask.innerText = value;
        taskContent.appendChild(checkComplete());
        
        taskContent.appendChild(titleTask);

        const content = `
            <i class="fas fa-trask-alt trashIcon icon"></i>`
        //task.innerHTML = content;
        task.appendChild(taskContent);

        list.appendChild(task);
    };

    // Arrow functions o funciones anonimas
    btn.addEventListener("click", createTask);

    const checkComplete = () => {
        const i = document.createElement("i");
        i.classList.add("far","fa-check-square","icon");
        i.addEventListener("click", completeTask);
        return i;
    }

    const completeTask = (event) => {
        const element = event.target;
        element.classList.toggle("fas");  //añadir class
        element.classList.toggle("far"); // quitar class
        element.classList.toggle("done");
    }

}) ();