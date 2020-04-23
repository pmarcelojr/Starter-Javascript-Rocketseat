// exercicio 04

let users = [
    {
        name: "Marcelo",
        skills: ["HTML", "CSS", "Javascript"]
    },
    {
        name: "Diego",
        skills: ["Javascript", "React", "React Native"]
    }
];


for (user of users){
    let { name, skills } = user;
    console.log(`${name} has these skills: ${skills.join(", ")}`)
}