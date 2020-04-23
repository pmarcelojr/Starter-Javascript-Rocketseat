// exercicio 02

pares = (x, y) => {

    for(let i = x; i <= y; i++) {
       if(i % 2 === 0) {
           console.log(`${i}: Par`)
       } else {
           console.log(`${i}: Impar`)
       } 
    }    
}

pares(32, 321)