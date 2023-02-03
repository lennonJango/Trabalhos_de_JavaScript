"strict mode";
let nome = prompt("Como te chamas?");
document.querySelector(".text").addEventListener("click", function () {
  if (nome == 0) {
    document.querySelector(".text1").textContent = `Ola `;
    document.querySelector(".text").style.background = "red";
  } else {
    document.querySelector(".text1").textContent = `Ola ${nome}`;
  }
});
