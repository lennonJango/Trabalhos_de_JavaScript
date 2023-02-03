"strict mode";

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

//document.querySelector(".check").addEventListener("onclick", function () {

document.querySelector(".check").addEventListener("click", function click() {
  let guess = Number(document.querySelector(".guess").value);

  console.log(guess);

  if (!guess) {
    document.querySelector(".messagem").textContent = "Numero invalido :>";
    document.body.style.background = "grey";
    //Quando o jogador ganha
  } else if (guess === number) {
    document.querySelector(".number").textContent = number;
    document.querySelector(".messagem").textContent = "Vc acertou :)";
    document.body.style.background = "green";
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      console.log(
        (document.querySelector(
          ".highScore"
        ).textContent = ` HighScore : ${highScore}`)
      );
    }
    //Quando o numero e maior
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector(".messagem").textContent =
        "O valor e muito alto .Tente novamente:(";
      score--;
      document.querySelector(".score").textContent = ` 💯 Score: ${score}`;
      document.body.style.background = "#b93434b9";
    } else {
      document.querySelector(".messagem").textContent = "You lost the game";
      document.querySelector(".score").textContent = " 💯 Score : 0";
    }
    //Quando o numero e muito baixo
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector(".messagem").textContent =
        " o valor e muito baixo .Tente novamente :(";
      score--;
      document.querySelector(".score").textContent = `  💯 Score: ${score}`;
      document.body.style.background = "#b93434b9";
    } else {
      document.querySelector(".messagem").textContent = "You lost the game";
      document.querySelector(".score").textContent = "  💯 Score: 0";
    }
  }
});

let guess = Number(document.querySelector(".guess").value);

document.querySelector(".btn").addEventListener("click", function () {
  score = 20;
  console.log((number = Math.trunc(Math.random() * 20) + 1));
  document.querySelector(".messagem").textContent = "Tente adivinhar";
  document.querySelector(".number").textContent = number;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = ` 💯 Score :${score}`;
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "15rem";
  document.body.style.background = "#222";
});
