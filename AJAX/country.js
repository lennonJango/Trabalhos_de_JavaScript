"use strict";
const containerCountries = document.querySelector(".countries");

function country(country) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(request.responseText);
    console.log(data);
    // Desestruturar o Object para conseguir obter a moeda e a lingua do pais
    const currency_key = Object.keys(data.currencies)[0];
    const current_languages = Object.keys(data.languages)[0];
    //
    const html = `<article class="country">
  <img class="country__img" src="${data.flags.png}"/>
   <div class="country__data">
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(2)}</p>
    <p class="country__row"><span>🗣️</span>${
      data.languages[current_languages]
    }</p>
    <p class="country__row"><span>💰</span>${
      data.currencies[currency_key].symbol
    }</p>
  </div>
</article>`;

    containerCountries.insertAdjacentHTML("beforeend", html);
    containerCountries.style.opacity = 1;
  });
}

country("Chile");
country("Mozambique");
