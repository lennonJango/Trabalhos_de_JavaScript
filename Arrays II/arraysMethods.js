"use strict";

const values = [10, 2, 4, 5, 8, 1];
// values.map(values * 2);
console.log(values);

const v = values.map((x) => x * 2);

const c = v;
console.log(c);

((x) => console.log(x * 3))(8);

const valuesString = values.map((value, index, arr) => {
  if (value > 0) {
    return `movimento ${index} :  ${value} `;
  } else {
    return `Os valores sao menores `;
  }
});

console.log(valuesString);



