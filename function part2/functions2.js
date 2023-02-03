"use strict";

// const oneWord = function (str) {
//   return str.replace(/ /g, " ").toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [firstWord, ...others] = str.split(" ");

//   return [firstWord.toUpperCase(), ...others].join(" ");
// };

// const transform = function (str, fn) {
//   console.log(`String transformada ${fn(str)}`);
//   console.log(`Nome da função ${fn.name}`);
// };

// transform("Lennon is a big programmer", upperFirstWord);

// const cumprimentar = function (srt) {
 
//   return srt.toLowerCase();
// };

// const high5 = function(){

//     console.log("Hello")
// }

// const nome = function (srt, ) {
//   return console.log(`${srt}`);
// };

// nome("Lennon",cumprimentar)

// document.body.addEventListener("click", nome);

const nome = srt => {return function(nome){
       console.log(`${srt} ${nome}`)
}};

let comprimentar = nome("hey");
comprimentar("Lennon")
nome("ola")("Gabby")