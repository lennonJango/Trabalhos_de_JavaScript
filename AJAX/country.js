"use strict";
const containerCountries = document.querySelector(".countries");

const renderCountry = function (data, className = "") {
  const currency_key = Object.keys(data.currencies)[0];
  const current_languages = Object.keys(data.languages)[0];
  //
  const html = `<article class="country ">
<img class="country__img" src="${data.flags.png}"/>
 <div class=country__data ${className}">
  <h3 class="country__name">${data.name.common}</h3>
  <h4 class="country__region">${data.region}</h4>
  <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(
    2
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

function country(country) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(request.responseText);
    console.log(data);

    renderCountry(data);
    // Esta parte do codigo e responsável por pegar os dados dos países vizinhos

    const borders = data.borders;
    for (let a in borders) {
      if (a <= 1) {
        const data1 = new XMLHttpRequest();
        data1.open("GET", `https://restcountries.com/v3.1/alpha/${borders[a]}`);
        data1.send();

        data1.addEventListener("load", function () {
          const [pais] = JSON.parse(data1.responseText);
          console.log(pais);
          renderCountry(pais);
        });
      }
    }
  });
}

//country("Chile");
country("Estados unidos");
//country("Germany");
//Vizinhos do pais
