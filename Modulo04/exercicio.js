const isMajor = age => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            age >= 18 ? resolve() : reject();
        }, 2000)
    })
};

isMajor(20)
    .then(() => {
        console.log('Maior que 18')
    })
    .catch(() => {
        console.log('Menor que 18')
    })