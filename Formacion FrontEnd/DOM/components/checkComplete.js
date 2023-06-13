
const checkComplete = (event) => {
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
    const fondo = event.target.parentElement.parentElement;//accediendo a la clase paren 2 veces
    fondo.classList.toggle("fondocambiado") // cambiar clase para cambiar backgroundcolor definido en css
};

export default checkComplete;