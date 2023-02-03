"use strict";

const dates = [
  "2021-11-18T21:31:17.178Z",
  "2021-12-23T07:42:02.383Z",
  "2022-01-28T09:15:04.904Z",
  "2022-04-01T10:17:24.185Z",
  "2022-05-08T14:11:59.604Z",
  "2022-05-27T17:01:17.194Z",
  "2022-07-11T23:36:17.929Z",
  "2022-07-12T10:51:36.790Z",
];

const conta1 = {
  usuário: "Lennon Jango",
  movimentos: [200, 1000, 4000, -200, -100, -300, 3000],
  pin: 2111,
  interestRate: 1.5,
  dates,
};

const conta2 = {
  usuário: "Gabby Jango",
  movimentos: [300, 900, 2390, 890, 800, -2000],
  pin: 1208,
  interestRate: 1.0,
  dates,
};

const conta3 = {
  usuário: "Ary Jango",
  movimentos: [3000, -900, 2390, 500, 800, -2000],
  pin: 9021,
  interestRate: 1.0,
  dates,
};

const conta4 = {
  usuário: "Gabriel Nassone",
  movimentos: [300, 900, 5090, 8900, 200, 2000],
  pin: 1707,
  interestRate: 2.0,
  dates,
};

const contas = [conta1, conta2, conta3, conta4];

const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const interCambio = new Map([
  ["USD", "Dólar"],
  ["EUR", "Euro"],
  ["Mt", "Metical"],
]);

//Mostrar os movimentos que a conta faz

const display = function (acc, sort = false) {
  //Parte do sort, ordem crescente
  const movs = sort
    ? acc.movimentos.slice().sort((a, b) => a - b)
    : acc.movimentos;
  //Data

  containerMovements.innerHTML = "";
  movs.forEach(function (mov, index) {
    const tipo = mov > 0 ? "DEPOSIT".toLowerCase() : "withdrawal";
    const time = new Date(acc.dates[index]);
    const day = time.getDay() + 1;
    const mes = time.getMonth() + 1;
    const ano = time.getFullYear();

    const displayDate = `${day}/${mes}/${ano} `;

    const html = `

    <div class="movements__row">
      <div class="movements__type movements__type--${tipo}">${
      index + 1
    } ${tipo}</div>
    <div class="movements__date"> ${displayDate} </div>
      <div class="movements__value">${mov}Mt</div>
    `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

//Calcular e mostrar o balanco da conta
const calcAndDisplay = function (acc) {
  const balance = acc.movimentos.reduce(
    (acumulador, valor) => (acumulador += valor),
    0
  );
  labelBalance.textContent = `${balance} Mt`;
};

// calcular e mostra os valores

const calcDisplaySummary = function (acc) {
  //cash in
  acc.balance = acc.movimentos

    .filter((mov) => mov > 0)
    .reduce((acc, valor) => acc + valor);

  labelSumIn.textContent = `${acc.balance} Mt`;
  // Cash out
  const cashOut = acc.movimentos
    .filter((mov) => mov < 0)
    .reduce((acc, valor) => acc + valor);
  labelSumOut.textContent = `${Math.abs(cashOut)} Mt`;
  // Cash Interest = taxa de deposito
  const cashInterest = acc.movimentos
    .filter((deposit) => deposit > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((value) => value >= 1)
    .reduce((acc, valor) => acc + valor);

  labelSumInterest.textContent = `${cashInterest} Mt`;
};

//criar userName

function criarUserName(accs) {
  accs.forEach(function (acc) {
    acc.userName = acc.usuário
      .toLowerCase()
      .split(" ")
      .map(function (name) {
        return name[0];
      })
      .join("");
  });

  return accs;
}
criarUserName(contas);
console.log(contas);

//Login da conta

let contaCorrente;
//Atualizar dados da conta
const atualizarDados = (acc) => {
  //mostrar balança de valores na conta
  display(acc);
  //mostrar o valor que o usuário tem na conta
  calcAndDisplay(acc);

  //mostrar o summary com o cashOut, CashIn, e O Interest
  calcDisplaySummary(acc);
};

// temporizador
const timer = function () {
  let time = 100;
  const min = String(Math.trunc(time / 60)).padStart(2, 0);
  const sec = String(time % 60).padStart(2, 0);
  // Repetir o cronometro
  setInterval(function () {
    labelTimer.textContent = `${min} :  ${sec}`;

    time--;
    // quando o timer deve parar
  }, 1000);
};
timer();

btnLogin.addEventListener("click", function (e) {
  //Serve para a pagina parar de recarregar toda hora
  e.preventDefault();
  time();
  timer();

  contaCorrente = contas.find(
    (users) => users.userName === inputLoginUsername.value
  );

  // loginPin = contas.find((users) => users.pin === inputLoginPin.value);

  if (contaCorrente?.pin === Number(inputLoginPin.value)) {
    //mostrar mensagem a dizer a conta foi logada

    labelWelcome.textContent = `Welcome back ${
      contaCorrente.usuário.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;
    //limpar os dados nos inputs
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    atualizarDados(contaCorrente);
  } else {
    containerApp.style.opacity = 0;
    labelWelcome.textContent = "Log in to get started";
  }
});

//transferir dinheiro de um user para o outro
btnTransfer.addEventListener("click", function (evento) {
  evento.preventDefault();

  const amount = Number(inputTransferAmount.value);

  const transferirPara = contas.find(
    (acc) => acc.userName === inputTransferTo.value
  );
  if (
    amount > 0 &&
    transferirPara &&
    contaCorrente.balance >= amount &&
    transferirPara?.usuário !== contaCorrente.usuário
  ) {
    //Transferir o dinheiro & atualizar data
    contaCorrente.dates.push(new Date());
    contaCorrente.movimentos.push(-amount);
    transferirPara.movimentos.push(amount);
    //Atualizar os dados
    atualizarDados(contaCorrente);
  }

  inputTransferAmount.value = inputTransferTo.value = "";
});

// Empréstimo

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (
    amount > 0 &&
    contaCorrente.movimentos.some((mov) => mov >= amount * 0.1)
  ) {
    setTimeout(function () {
      //Adicionar o valor na conta
      contaCorrente.movimentos.push(amount);
      //Atualizar os dados da conta
      atualizarDados(contaCorrente);
      contaCorrente.dates.push(new Date());
      inputLoanAmount.value = "";
    }, 2500);
    alert("O seu pedido esta a ser processado");
  }
});
//Encerrar a conta /apagar a conta;

btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === contaCorrente.userName &&
    Number(inputClosePin.value) === contaCorrente.pin
  ) {
    const index = contas.findIndex(
      (acc) => acc.userName === contaCorrente.userName
    );
    contas.splice(index, 1);
    containerApp.style.opacity = 0;
    labelWelcome.textContent = "Log in to get started";
  }

  inputCloseUsername.value = inputClosePin.value = "";
});
//Organizar os movimentos da conta em ordem decrescente
let sort = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();

  display(contaCorrente.movimentos, !sort);

  sort = !sort;
});
//Fingir estar logado

// contaCorrente = conta1;
// atualizarDados(contaCorrente);
// containerApp.style.opacity = 100;
//
const time = function () {
  const now = new Date();
  const day = `${now.getDate()}`.padStart(2, 0);
  const mes = now.getMonth() + 1;
  const ano = now.getFullYear();
  const hora = `${now.getHours()}`.padStart(2, 0);
  const minutos = ` ${now.getMinutes()} `.padStart(2, 0);
  labelDate.textContent = `${day}/${mes}/${ano} , ${hora}:${minutos}`;
};
