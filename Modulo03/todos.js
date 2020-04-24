let listElement = document.querySelector('#app ul')
let inputElement = document.querySelector('#app input')
let buttonElement = document.querySelector('#app button')

var todos = [
    'Fazer Café',
    'Estudar Javascript',
    'Acessar Comunidade'
];

function renderTodos() {
    for(todo of todos){
        let todoElement = document.createElement('li')
        let todoText = document.createTextNode(todo)

        todoElement.appendChild(todoText)
        listElement.appendChild(todoElement)
    }
}

renderTodos()