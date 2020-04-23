// exercicio 03

const haveSkill = skills => {
    if (skills.indexOf("Javascript") !== -1)
        return console.log("Have Skill")
    else
        return console.log("Not Skill")
}

let skills = ["HTML", "Javascript", "React"]

haveSkill(skills)