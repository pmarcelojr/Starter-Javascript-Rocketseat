let myPromise = function () {
    return new Promise(function(resolve, reject) {
        let xhr = new XMLHttpRequest()
        xhr.open('GEt', 'https://api.github.com/users/pmarcelojr')
        xhr.send(null)

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 ){
                if (xhr.status === 200 ) {
                    resolve(JSON.parse(xhr.responseText))
                } else {
                    reject('Erro na requisição')
                }
            }
        }
    })
}

myPromise()
    .then(function(response) {
        console.log(response)
    })
    .catch(function(error) {
        console.log(error)
    })
