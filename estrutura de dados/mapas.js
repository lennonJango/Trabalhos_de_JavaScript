"use strict";

const nomeDaFamilia = new Map();
nomeDaFamilia.set("NomeDoPAi", "Gabriel");
nomeDaFamilia.set("NomeDaMae", ["Xifu","Wina"]);
console.log(nomeDaFamilia);
nomeDaFamilia.set("irmas", ["Gabby,Ary","Dry"]);
console.log(nomeDaFamilia);
console.log(nomeDaFamilia.get("irmas"))
nomeDaFamilia.set("MeioDeSemana",{open:12 , close:22})

nomeDaFamilia.set("fimDeSEmana",{open:10,close:23});
let horas = 21
  console.log(nomeDaFamilia.get("fimDeSEmana")>=horas && nomeDaFamilia.set("MeioDeSemana")<=23);
