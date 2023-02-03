"use strict";


const livro=[]

function avião (numero,passageiros,local){

    numero = numero || 1;
    passageiros = passageiros || 1;
    local = local ||  "Local por definir";

    const livroDeNotas = {

        numero,
        passageiros,
        local,
    }


   

    livro.push(livroDeNotas)
    console.log(livro)



}

avião(2,2,"Lisboa");
avião(1,3,"Luanda")

