"use strict";
const containerCountries = document.querySelector(".countries");
const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/name/Mozambique");
request.send();

request.addEventListener("load", function () {
  const [data] = JSON.parse(request.responseText);
  console.log(data);

  const html = `<article class="country">
  <img class="country__img" src="${data.flags.png}"/>
   <div class="country__data">
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)}</p>
    <p class="country__row"><span>🗣️</span>${data.languages.por}</p>
    <p class="country__row"><span>💰</span>${data.currencies.MZN.symbol}</p>
  </div>
</article>`;
  console.log(html);
  containerCountries.insertAdjacentHTML("beforeend", html);
  containerCountries.style.opacity = 1;
  console.log("im here2");
});
