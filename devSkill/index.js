"use-strict";

// let foodForToday = ["segunda", "Terça", "Quarta", "Quinta", "Sexta"];
// foodForToday.push("Sábado", "Domingo");

// for (let i = 0; i < foodForToday.length; i++) {
//   console.log(foodForToday[i]);

//   switch (foodForToday[i]) {
//     case "segunda":
//       console.log("frango a portuguesa");
//       break;
//     case "Terça":
//       console.log("Lulas grelhadas");
//       break;
//     case "Quarta":
//       console.log("Lombo");
//       break;
//     case "Quinta":
//       console.log("Estrogonofe");
//       break;
//     case "Sexta":
//       console.log("Pizza Havaiana");
//       break;
//     case "Sábado":
//       console.log("Bife a portuguesa");
//       break;
//     case "Domingo":
//       console.log("Rodizio  a escolha do cliente");
//       break;

//     default:
//       console.log("Escolha um dia da semana");
//   }
// }

//dados:[21,17,23]

let forecastedTemperatures = [21, 17, 23,55];

 
  
function forecastedPrint(arr) {
  

  for (let i = 0; i < arr.length; i++) {

    let str ='';
    str = str + arr[i]

    console.log(`${str} C in day ${i+1} ...`);
    
     
  }
}

   forecastedPrint(forecastedTemperatures)
