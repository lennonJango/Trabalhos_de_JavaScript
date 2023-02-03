// "use strict"

(function () {
  console.log("Hello word");
})();

let i;

let a = function () {
  let a = 22;

  i = function () {
    i = a * 2;
    console.log(i);
  };
};

a();
i();
console.dir(i);
let b = function () {
  let b = 200;

  i = function () {
    i = b * 10;
    console.log(i);
  };
};

b();



