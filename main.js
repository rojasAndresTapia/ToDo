

let arr = [];
let newElement;
const formElement = document.querySelector(".js-form");
const inputElement = document.querySelector(".js-task");
const buttonElement = document.querySelector(".js-button");
const listElement = document.querySelector(".js-list")


const handleForm = (event) => {
    event.preventDefault();
};
formElement.addEventListener("submit", handleForm);


const handleInput = (event) => {
    const inputValue = event.target.value;
    newElement = inputValue;
};
inputElement.addEventListener("change", handleInput);

const handleButton = () => {
arr.push(newElement);
addTask();
};

const addTask = () => {
    
    
    const listTasks = arr.map(item => {

       return `<li class="listItem"><p>${item}</p><div><button class="btn btn-success done">done</button><button class="btn btn-danger delete">delete</button></div></li>`;
    });


    return listElement.innerHTML = listTasks.join("");
 
};

buttonElement.addEventListener("click", handleButton);







