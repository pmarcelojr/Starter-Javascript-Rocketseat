
let listElement = document.querySelector('ul')
let inputElement = document.querySelector('input')

renderRepositories = repositores => {
    for (repo of repositores) {
        const textElement = document.createTextNode(repo.name)
        const liElement = document.createElement('li')

        liElement.appendChild(textElement)
        listElement.appendChild(liElement)
    }
}

listRepositories = () => {
    let user = inputElement.value;
    if(!user) return;
    axios.get(`https://api.github.com/users/${user}/repos`)
    .then(function(response) {
        renderRepositories(response.data)
    })
}
