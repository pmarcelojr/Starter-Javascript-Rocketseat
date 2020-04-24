let listElement = document.querySelector('ul')
let inputElement = document.querySelector('input')

renderRepositories = repositores => {
    listElement.innerHTML = "";

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
    renderLoading()
    axios.get(`https://api.github.com/users/${user}/repos`)
        .then((response) => {
            renderRepositories(response.data)
        })
        .catch(() => {
            renderError()
        })
}

renderLoading = loading => {
    listElement.innerHTML = ""

    let textElement = document.createTextNode('Carregando...')
    let loadingElement = document.createElement('li')

    loadingElement.appendChild(textElement)
    listElement.appendChild(loadingElement)
}

renderError = loading => {
    listElement.innerHTML = ""
    
    let textElement = document.createTextNode('Erro!')
    let errorElement = document.createElement('li')

    errorElement.style.color = '#F00'
    errorElement.appendChild(textElement)
    listElement.appendChild(errorElement)
}