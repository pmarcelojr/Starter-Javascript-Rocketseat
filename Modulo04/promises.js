axios.get('https://api.github.com/users/pmarcelojr')
    .then(function(response) {
        console.log(response)
    })
    .catch(function(error) {
        console.log(error)
    })
