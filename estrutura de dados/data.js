// "use strict";
/// const arr =[ 1,2,3]
// //  const a = arr[0]
// //  const b = arr[1]
// //  const c = arr[2]

// //  const [x,y,z]=arr

// //  console.log(x,y,z)

// // let [principal ,secundário]  = restaurant.menuDeEntradas
// //  console.log(principal,secundário);
// //  [principal,secundário] =[secundário,principal]
// //  console.log(principal,secundário)

// // const dados1 ={
// //     nome: ["Lennon " ,"Gabby", "Ary" , "Dry"],
// //     idades: [18,13,6,2],
// //     chamarNome: function (nome,idades){

// //         return console.log(this.nome[nome], this.idades[idades])
// //     }
// // }

// //  random = Math.trunc(Math.random()*4)
// // dados1.chamarNome(random,random)

// const n = [1, 2, [2, 33, 25, 6]];
// let [a1, , [b2, c, d, e]] = n;
// console.log(a1, b2, c, d, e);
// [a1, b2, c, d, e] = [e, b2, d, c, a1];
// console.log(a1, b2, c, d, e);

const restaurant = {
  nome: "Liberdade Expresso",
  local: "Bairro da Liberdade",
  menuDeEntradas: ["Pizza", "Lombo", "Cabrito", "Frango SulAfricano"],
  menu: ["Lagosta", "salmão", "Rodizio especial", "camarão"],
  bebidas: ["Tónica", "Vinho", "Whisky"],
  order: function (principal, secundário) {
    return [this.menuDeEntradas[principal], this.menu[secundário]];
  },
  horário: {
    sábados: {
      entrada: 12,
      saída: 22,
    },
    domingos: {
      entrada: 10,
      saída: 21,
    },
    segundas: {
      entrada: 8,
      saída: 22,
    },
  },
  deliver: function(obj){

     return console.log(obj.local)
  },

//  ingredientes:function (ingredientes1,ingredientes2,ingredientes3){
      
//   return ` I want a massa with ${ingredientes1} and ${ingredientes2}all so ${ingredientes3}`
//  }

};




 restaurant.deliver({
     nome: "Lennon",
     tempo: 20 ,
     local : "Liberdade",


 })

//  const newMenu =["cogumelos",...restaurant.menuDeEntradas]
//  console.log(newMenu)

//  

//  console.log(restaurant.ingredientes(...ingredientes))


// let random = Math.trunc(Math.random() * 4);
// const [a, b] = restaurant.order(random, random);
// console.log(a,'', b);


// const {menuDeEntradas:menu1 , menu:menu2 ,bebidas:bebidas}= restaurant
//  console.log(menu1,menu2,bebidas)


//   restaurant.trabalhadores = ["Samanta", "Gabby"]
//   const {trabalhadores =[], bebidas:drinks}=restaurant
//  console.log(trabalhadores,drinks)

//  const {segundas:{entrada,saída}} = restaurant.horário
//   console.log(entrada,saída)


const numero = [1,2,3,4,5,6,7,8,9]
 let [a,b,...outrosNumero] = numero
  console.log(a,b,outrosNumero)

  const names = ["lennon","gaby"]
   console.log(names);
   let [nome1,nome2] = names;
    console.log(nome1,nome2);
     [nome1,nome2] =[nome2,nome1];
      console.log(nome1,nome2)

