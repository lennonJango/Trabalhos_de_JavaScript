"use strict";
const containerCountries = document.querySelector(".countries");

const renderCountry = function (data, className = "") {
  const currency_key = Object.keys(data.currencies)[0];
  const current_languages = Object.keys(data.languages)[0];
  //
  const html = `<article class="country  ${className} ">
<img class="country__img" src="${data.flags.png}"/>
 <div class=country__data ">
  <h3 class="country__name">${data.name.common}</h3>
  <h4 class="country__region">${data.region}</h4>
  <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(
    1
  )} people</p>
  <p class="country__row"><span>🗣️</span>${
    data.languages[current_languages]
  }</p>
  <p class="country__row"><span>💰</span>${
    data.currencies[currency_key].name
  }</p>
</div>
</article>`;
  containerCountries.insertAdjacentHTML("beforeend", html);
  containerCountries.style.opacity = 1;
};

// function country(country) {
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(request.responseText);
//     console.log(data);

//     renderCountry(data);
//     // Esta parte do codigo e responsável por pegar os dados dos países vizinhos

//     const borders = data.borders;
//     for (let a in borders) {
//       if (a <= 1) {
//         const data1 = new XMLHttpRequest();
//         data1.open("GET", `https://restcountries.com/v3.1/alpha/${borders[a]}`);
//         data1.send();

//         data1.addEventListener("load", function () {
//           const [pais] = JSON.parse(data1.responseText);
//           console.log(pais);
//           renderCountry(pais);
//         });
//       }
//     }
//   });
// }

// const country1 = function (country) {
//   const map = fetch(`https://restcountries.com/v3.1/name/${country}`);
//   console.log(map);
// };

//country("Chile");
//country("Estados unidos");
//country("Germany");
//Vizinhos do pais
//country1("Mozambique");

// function
const getCountryData = function () {
  const country = prompt("Qual e o pais que gostaria de conhecer");
  // Recebe o pedido do prompt e envia para url
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(function (response) {
      console.log("Aguarda a resposta:");

      return response.json();
    })
    .then(function (data1) {
      const [data] = data1;

      renderCountry(data);
      // verefica se os pais tem bordas (países vizinhos)
      if (!data.borders || !data.borders[1]) return;
      const borders = data.borders;

      // envia a borda do pais na posição 1

      fetch(`https://restcountries.com/v3.1/alpha/${borders[1]}`)
        .then(function (data) {
          return data.json();
        })
        .then(function (resposta) {
          const [dados] = resposta;
          renderCountry(dados, "neighbour");
        });
    })
    .catch(() => alert("N foi possivel encontrar o pais tente novamente"))
    .finally(() => (containerCountries.style.opacity = 0));
};
// Botão que ira fazer toda a função getcountryData funcionar
const btn = document
  .querySelector(".btn-country")
  .addEventListener("click", getCountryData.bind());

//getNeighbor(");
