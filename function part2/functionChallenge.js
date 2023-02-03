"use strict";

const poll ={
    question:"Qual e a tua linguagem de programação favorita? ",
    Option:{o:"JavaScript",1:"Java",2:"C++",3:"Python"},
    answers: new Array(4).fill(0),
     answers(){

        const user = Number(prompt("Escolha as seguintes opções: 0-JavaScript,1-java,2-c++,3-python"))
    
        const dados =`o user escolheu o numero ${user}`
    
        poll.answers.push(dados);
        
        console.log(this.answers[this.answers]++)
    
    }
    
}

 



document.querySelector(".button").addEventListener("click",answers)

