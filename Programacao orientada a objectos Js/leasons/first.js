"use strict";
// const Pessoa = function (nome, apelido, aniversario) {
//   this.aniversario = aniversario;
//   this.nome = nome;
//   this.apelido = apelido;

//   //NUnca usar isto
//   //   this.toString = function () {
//   //     return nome + " " + apelido;
//   //   };
// };

// Pessoa.prototype.toString = function () {
//   return this.nome + " " + this.apelido;
// };

// Pessoa.prototype.idade = function () {
//   return 2022 - this.aniversario;
// };

// const newPerson = new Pessoa("Lennon", "Jango", 18);
// // const Trabalhador = function (nome, apelido, profissao, anoDeNascimento) {
// //   this.nome = nome;
// //   this.apelido = apelido;
// //   this.profissao = profissao;
// //   this.anoDeNascimento = anoDeNascimento;
// // };

// // Trabalhador.prototype.calcIdade = function () {
// //   return 2022 - this.idade;
// // };

// Pessoa.prototype.specie = "HomoSapiens";

// const arr = [];

// for (let i = 0; i < 5; i++) {
//   const nr = Math.trunc(Math.random() * 8 + 1);
//   arr.push(nr);
// }
// console.log("proto of array");
// console.log(arr.__proto__);

// class Car {
//   constructor(nomeDaEmpresa, make, speed) {
//     this.nomeDaEmpresa = nomeDaEmpresa;
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerate() {
//     return (this.speed += 10);
//   }
//   brake() {
//     return (this.speed -= 10);
//   }

//   toString() {
//     return (
//       "Empresa :" +
//       this.nomeDaEmpresa +
//       "\n" +
//       "Nome do carro :" +
//       this.make +
//       "\n" +
//       "Speed of the car: " +
//       this.speed
//     );
//   }
// }

// const bmw = new Car("Bmw Luxury", "Bmw", 120);

// //console.log(bmw.accelerate());

// const mercedes = new Car("Mercedes Luxury", "Mercedes", 60);

// class Pessoa {
//   constructor(nome, anoDeNascimento, sexo) {
//     this.nome = nome;
//     this.anoDeNascimento = anoDeNascimento;
//     this.sexo = sexo;
//   }

//   idade() {
//     const year = new Date();
//     const ano = year.getFullYear();
//     return ano - this.anoDeNascimento;
//   }

//   toString() {
//     return (
//       this.nome +
//       " - " +
//       this.sexo +
//       " - " +
//       this.idade() +
//       " - " +
//       this.anoDeNascimento
//     );
//   }
// }

// const lennon = new Pessoa("Lennon", 2004, "Masculino");
// console.log(lennon.toString());
// const Trabalhador = lennon;
// console.table(Trabalhador);

// const account = {
//   owner: "Lennon",
//   movements: [200, 200, 400, 100],

//   get Last() {
//     return this.movements.slice(-1).pop();
//   },

//   set Last(movements) {
//     return this.movements.push(movements);
//   },
// };

// class acc {
//   constructor(owner, movements) {
//     this.owner = owner;
//     this.movements = movements;
//   }

//   /**
//    * @param {any} mov
//    */
//   set last(mov) {
//     return this.movements.push(mov);
//   }

//   /**
//    * @param {any} name
//    */
//   set owner(name) {
//     if (name.includes(" ")) return (this._owner = name);
//     else return alert(`${name} is not a full name`);
//   }

//   get owner() {
//     return this._owner;
//   }
//   static hey() {
//     console.log("Hey");
//     console.log(this);
//   }
// }

// const conta1 = new acc("Lennon Jango", [200, 300, 400]);
// // console.log((conta1.last = 100));
// // console.log(conta1.movements);

// const h1 = (el) => console.log("hello");
// const person = {
//   calcAge() {
//     return 2022 - this.birthday;
//   },
// };

// //onst Lennon = Object.create(person);
// person.name = "Lennon";
// person.birthday = 2004;
// const lennon = Object.create(person);
// console.log(lennon.calcAge());

// let Trabalhador = {
//   profissao: "Programador",
// };

// Trabalhador = Object.assign(person);
// console.log(Trabalhador.name);

//

// const ford = new Car("Ford Ranger", 120);

// console.log(ford.velocidade);
// console.log(ford.speed());
// console.log(ford.speedUs);
// console.log((ford.speedUs = 120));

// const car2 = Object.create(ford);
// console.log("car 2");
// console.log(car2.speedUs);
// console.log((car2.speedUs = 80));

// const Person = function (nome, anoDeNascimento) {
//   this.nome = nome;
//   this.anoDeNascimento = anoDeNascimento;
// };

// Person.prototype.calcAge = function () {
//   const data = new Date();
//   const ano = data.getFullYear();
//   return ano - this.anoDeNascimento;
// };

// const pessoa1 = new Person("Lennon", 2004);
// console.log(pessoa1);

// const Student = function (nome, anoDeNascimento, curso) {
//   Person.call(this, nome, anoDeNascimento);
//   this.curso = curso;
// };

// Student.prototype.introduce = function () {
//   return `My name is ${this.nome} and i study ${this.curso}`;
// };
// const Lennon = new Student("Lennon", 2004, "Ciência de Computação");
// Student.prototype.constructor = Student;
// Lennon.introduce();

// const Trabalhador = function (nome, anoDeNascimento, profissao) {
//   Person.call(this, nome, anoDeNascimento);
//   this.profissao = profissao;
// };

// Trabalhador.prototype = Object.create(Person.prototype);

// Trabalhador.prototype.local = "banco";

// const trabalhador = new Trabalhador("Lennon Jango", 2004, "Programador");

// console.dir(trabalhador.constructor);

// const Car = function (nome, velocidade) {
//   this.nome = nome;
//   this.velocidade = velocidade;
// };

// Car.prototype.accelerate = function () {
//   return (this.velocidade += 10);
// };

// Car.prototype.brake = function () {
//   return (this.velocidade -= 10);
// };

// const Ev = function (nome, velocidade, charge) {
//   Car.call(this, nome, velocidade);
//   this.charge = charge;
// };

// Ev.prototype = Object.create(Car.prototype);

// Ev.prototype.chargeBattery = function (battery) {
//   return (battery = this.charge);
// };

// Ev.prototype.accelerate = function () {
//   const speed = (this.velocidade += 20);
//   const battery = (this.charge -= 1);

//   console.dir(
//     `The ${this.nome} going into ${speed}kmh,with a charge of ${battery}%`
//   );
// };

// const Tesla = new Ev("Tesla ", 120, 40);
// Tesla.accelerate();
// Tesla.accelerate();
// console.log(Tesla.brake());
// Tesla.chargeBattery(80);
// console.log(Tesla.charge);

// const Ford = Object.create(Tesla);

// // Herancas com classes ES6

// class Pessoa {
//   constructor(nome, anoDeNascimento, sexo) {
//     this.nome = nome;
//     this.anoDeNascimento = anoDeNascimento;
//     this.sexo = sexo;
//   }

//   idade() {
//     const data = new Date();
//     const ano = data.getFullYear();
//     return ano - this.anoDeNascimento;
//   }

//   information() {
//     return (
//       this.nome +
//       "- " +
//       this.idade() +
//       " - " +
//       this.anoDeNascimento +
//       " - " +
//       this.sexo
//     );
//   }

//   get name() {
//     if (!this.nome.includes(" ")) return alert("O seu nome esta incompleto");
//   }
// }

// const pessoa1 = new Pessoa("Lennon Jango ", 2004, "Masculino");
// console.log(pessoa1.information());
// pessoa1.name;

// class Estudante extends Pessoa {
//   constructor(nome, anoDeNascimento, sexo, curso) {
//     super(nome, anoDeNascimento, sexo);
//     this.curso = curso;
//   }
// }

// const aluno = new Estudante("Gabriela Jango", 2007, "Feminino", "Advocacia");

class Acc {
  //public fields
  locale = navigator.language;

  //private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
  }

  get movements() {
    return this.#movements;
  }

  get pin() {
    return this.#pin;
  }

  cashIn(value) {
    return this.#movements.push(value);
  }

  cashOut(value) {
    return this.#movements.push(-value);
  }
}

const conta1 = new Acc("Lennon", "Mt", 2111);
console.log(conta1);
conta1.cashIn(200);
conta1.cashIn(400);
conta1.cashIn(500);
conta1.cashIn(700);
conta1.cashOut(400);
