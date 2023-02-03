"use strict";
const nome = ["Gabby", "Ary", "Lennon"];
const dados = {
  nome,
  idade: [13, 6],

  anoDeNascimento(year) {
    const [idadeAry, idadeGabby] = this.idade;

    return console.log(year - idadeAry, year - idadeGabby);
  },

  horário: {
    Segunda: {
      entrada: 12,
      saída: 18,
    },
    Terçã: {
      entrada: 9,
      saída: 14,
    },

    Quarta: {
      entrada: 7,
      saída: 15,
    },
    Quinta: {
      entrada: 10,
      saída: 16,
    },
    Sexta: {
      entrada: 12,
      saída: 18,
    },
  },
};

let anos;

for (anos of Object.keys(dados.horário)) {
  console.log(anos);
}

for (anos of Object.values(dados.horário)) {
   console.log(anos);
 }

const horário = Object.entries(dados.horário);

 for(let [dia ,{entrada:open,saída:close}]of horário){

   console.log(`O nosso restaurante abre nas ${dia} as ${open} horas e fecha as ${close} horas`)

   
 }