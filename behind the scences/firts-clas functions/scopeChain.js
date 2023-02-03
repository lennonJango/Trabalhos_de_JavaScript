"use strict";
// function calcAge(anoDeNascimento) {
//   let idade = 2022 - anoDeNascimento;

//   function inf() {
//     let trabalho = "Programador";

//     console.log(`${nome} tem ${idade} anos e trabalha como ${trabalho}`);
//   }

//   inf();
//   return idade;
// }

// const nome = "Lennon";
// calcAge(2004);

// function calcAge1(ano) {
//   let idade = 2022 - ano;

//   if (idade > 18) {
//     function maiorDeIdade() {
//       console.log(`O ${nome} e maior de idade com ${idade} anos`);
//     }

//     maiorDeIdade();
//   } else if (idade < 18) {
//   const  menorDeIdade =  () =>  {
//       const nome = "Gabby";

//       console.log(` A ${nome} e menor de idade com ${idade} anos`);
//     }

//     menorDeIdade();
//   }
// }

// calcAge1(2009);

// let dados= (a,b)=>{

//   let x = a+b

//   return x

// }

// let dados1 = {
//   nome: "Lennon",
//   idade: 18,
//   anoDeNascimento: function (anoActual) {
//     let ano = anoActual - this.idade
//      return ano
//   },

//   trabalho: "Programador",
// };


// let dados2 ={
//   nome:"Gabby",
//   idade:13,

// }
// dados2.anoDeNascimento = dados1.anoDeNascimento

// console.log(dados2)


let dados ={
  nome : "Lennon",
  idade: 18 ,
  anoDeNascimento : function(year){

      

      let informação = () => {
        console.log(` Hello ${this.nome} tem ${this.idade}`)
      
      } ;
  informação()
      return year -this.idade

      
  }
  
   
}

console.log(dados.anoDeNascimento(2004))