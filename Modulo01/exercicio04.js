// exercicio 04
// 0-1 year: Begginer
// 1-3 years: Intermediate
// 3-6 years: Advanced
// 7 above: Jedi Master

const experience = years => {
    if (years === 0 || years === 1)
        return console.log("begginer")
    else if (years > 1 && years <= 3)
        return console.log("Intermediate")
    else if (years > 3 && years <= 6)
        return console.log("Advanced")
    else if (years > 6)
        return console.log("Jedi Master")
    else
        return console.log("Erro entering age")
}

let yearsLearn = 10;
experience(yearsLearn)

/*
const calcExp = age => {
  switch (true) {
    case age >= 0 && age <= 1:
      console.log(`Você tem ${age} anos de exp, seu nível é: Iniciante`);
      break;
    case age >= 1 && age <= 3:
      console.log(`Você tem ${age} anos de exp, seu nível
é: Intermediário`);
      break;
    case age >= 3 && age <= 6:
      console.log(`Você tem
${age} anos de exp, seu nível é: Avançado`);
      break;
    default:
      console.log(`Você
tem ${age} anos de exp, seu nível é: Jedi Master `);
      break;
  }
};
calcExp(1);
calcExp(3);
calcExp(6);
calcExp(10);
*/