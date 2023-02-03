"use strict";
//pontos dos jogadores
let score0 = document.querySelector("#score0");
let score1 = document.querySelector("#score1");
let imgDoJogo = document.querySelector(".dice");
let botãoRollDice = document.querySelector(".btn--roll");
let botãoNew = document.querySelector(".bnt--new");
let botãoHold = document.querySelector(".btn--hold");
let scorePlayer1 = document.querySelector("#current--0");
let scorePlayer2 = document.querySelector("#current--1");
let sectionPlayer1 = document.querySelector(".player--0");
let sectionPlayer2 = document.querySelector(".player--1");

//start the game!
score0.textContent = 0;
score1.textContent = 0;
imgDoJogo.classList.add("hidden");
let score ;
let currentSCore ;
let activePlayer ;
let playing ;

//restart the play

function restart() {
  score0.textContent = 0;
  score1.textContent = 0;
  imgDoJogo.classList.add("hidden");
   score = [0, 0];
   currentSCore = 0;
   activePlayer = 0;
   playing = true;

  scorePlayer1.textContent = 0;
  scorePlayer2.textContent = 0;
  score0.textContent = 0;
  score1.textContent = 0;
  scorePlayer1.classList.remove("player--active");
  scorePlayer2.classList.add("player--active");
  sectionPlayer1.classList.remove("player--winner");
  scorePlayer2.classList.remove("player--winner");
}
restart();

// winner

function winner() {
  if (score[activePlayer] >= 10) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add("player--winner");

    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove("player--active");

    // document.querySelector(`#current--${activePlayer}`).classList.add("player--winner.name")
  } else {
    mudarDeJogador();
  }
}

//switch the player

function mudarDeJogador() {
  //Estas condições também funcionam;
  /*if (activePlayer == 1) {
    document.querySelector(`.player--1`).style.background = "#fdfcfcd0";
   } else if (activePlayer == 0) {
     document.querySelector(`.player--1`).style.background = " #c7365f";
  }

   if (activePlayer == 0) {
    document.querySelector(`.player--0`).style.background = "#fdfcfcd0";
   } else if (activePlayer == 1) {
     document.querySelector(`.player--0`).style.background = "#9c2849";
   } */

  document.querySelector(`#current--${activePlayer}`).textContent = 0;

  activePlayer = activePlayer === 0 ? 1 : 0;
  currentSCore = 0;
  document.querySelector(".player--0").classList.toggle("player--active");
  document.querySelector(".player--1").classList.toggle("player--active");
}

//botão rolling dice
botãoRollDice.addEventListener("click", function () {
  let randomNumber = Math.trunc(Math.random() * 6 + 1);
  console.log(randomNumber);

  imgDoJogo.classList.remove("hidden");

  imgDoJogo.src = `dice-${randomNumber}.png`;

  if (randomNumber !== 1) {
    currentSCore = currentSCore + randomNumber;
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentSCore;
  } else {
    mudarDeJogador();
  }
});

botãoHold.addEventListener("click", function () {
  score[activePlayer] = score[activePlayer] + currentSCore;
  document.querySelector(`#score${activePlayer}`).textContent =
    score[activePlayer];

  winner();
});

botãoNew.addEventListener("click", function () {
  console.log("click");
  restart();
});
