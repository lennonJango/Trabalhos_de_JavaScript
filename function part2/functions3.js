"use strict";
// Método call
const avião={

    nome: "LEAM",
    cidade: "Maputo",
    destino(nomeDoPassageiro,numero,destino){

        console.log(`${nomeDoPassageiro} vai na embarcação ${this.nome} que parte da cidade de ${this.cidade} passageiro numero ${numero} vai para ${destino}`)

    }
}

avião.destino("Gabriel Jango",13,"Franca");


const avião2 = {

    nome :" euroWings " ,
    cidade: "Matola"
}

const book = avião.destino;
book.call(avião2,"Lennon",21,"Inglaterra");

//method bind
const dados = {
    nome: "Lennon Jango",
    idade: 18,
    dados(local,anoActual){

        const data = anoActual-this.idade ;

        console.log(`${this.nome} Vive no bairoo ${local}, nasceu no ano ${data}`)

    }
}

dados.dados("Liberdade",2022)


const dados2 ={
    nome:"Gabby Jango",
    idade:13,
}


const book1 = dados.dados.bind(dados2);
book1("Liberdade",2022);



// const taxas= (taxa,valor)=> taxa+taxa*valor ;

// console.log(taxas(0.2,200))

// const taxasMoz = taxas.bind(taxas,0.30);
// console.log(taxasMoz(400));

const taxas2 = (taxas,valor)=> (nome)=> console.log(`${nome},${taxas},${valor} valor total ${taxas+taxas*valor}`)

taxas2(0.40,200)("Lennon")

const taxasMoz = taxas2.bind(taxas2,0.30)
taxasMoz(200)("Gabby")

 
 