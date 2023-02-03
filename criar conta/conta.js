"use strict";

const email = document.querySelector(".mail");
const password = document.querySelector(".pass");
const btn = document.querySelector(".btt");

const contal = {
  username: "Lennon",
  pass: "G4jango",
};

const contag = {
  username: "gabby",
  pass: "g3g2",
};

const contaf = [contal, contag];
console.log(contaf);

const nr = [1, 23, 323, 212, 322];
//confimar dados
function confirmarDados(conta) {
  let contaACtual = email.value;
  let passActual = password.value;
  const cc = contaf.map((cc) => cc.username.toLowerCase());
  const pass = contaf.map((cc) => cc.pass);
  if (contaACtual.toLowerCase() == cc.find((nome) => nome == contaACtual)) {
  }

  if (passActual.toLowerCase() == pass.find((pas) => pas == pass)) {
    alert("conta logada com sucesso");
  }
}

//
btn.addEventListener("click", function (e) {
  e.preventDefault;
  confirmarDados(contaf);
});
