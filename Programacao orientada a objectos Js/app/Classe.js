"use strict";

// Elementos selecionados
const form = document.querySelector(".form");
const containerWorkOuts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");

const mouth = [
  "Janeiro",
  "Fevereiro",
  "March",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

// The class App contains the necessary elements what we gonna use for our application.
class App {
  #mapEvent;
  #map;
  workOut = [];
  // this is a constructor for our application
  constructor() {
    this._getPosition();
    form.addEventListener("submit", this._newNetwork.bind(this));
    inputType.addEventListener("change", this._toggleElevationField.bind(this));
  }

  _getPosition() {
    //Codigo que recebe a localização actual do usuário
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert("We can not find your location");
        }
      );
    }
  }

  _loadMap(position) {
    //Codigo que le o mapa usando a API leaflet
    const { latitude } = position.coords;
    const { longitude } = position.coords;

    const coords = [latitude, longitude];

    //Novo mapa

    this.#map = L.map("map").setView(coords, 14);

    var tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(this.#map);

    //Marcador que marca a minha localização atual através do navigator.geolocation
    L.marker(coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          autoClose: false,
          minWidth: 100,
          closeOnClick: false,
          className: "running-popup",
        })
      )
      .setPopupContent("Sua localização actual")
      .openPopup()
      .closePopup();

    L.geoJson(coords).addTo(this.#map);
    this.#map.on("click", this._showForm.bind(this));
  }

  _setLocalStorage() {}
  _newNetwork(e) {
    e.preventDefault();

    //Pegar os dados do formulário
    const { lat, lng } = this.#mapEvent.latlng;
    const type = inputType.value;
    const duration = +inputDuration.value;
    const distance = +inputDistance.value;
    let workOut;
    // Verificar se os dados são validos
    // Este método verificá se os inputs são validos
    const validarInputs = (...inputs) =>
      inputs.every((e) => Number.isFinite(e));

    const conditionInput = (...input) =>
      input.every((e) => Number.isFinite(e) > 0);
    //Se a atividade for correr , criar Object running
    if (type === "running") {
      const cadence = +inputCadence.value;
      if (
        !validarInputs(duration, distance, cadence) ||
        !conditionInput(duration, distance, cadence)
      ) {
        return alert(
          "Os dados tem que ser um numero e um numero maior que zero"
        );
      }

      workOut = new Running([lat, lng], distance, duration, cadence);
    }

    // Se a atividade for andar de bicicleta , criar Object cycle
    if (type === "cycling") {
      const elevationGain = +inputElevation.value;
      if (
        !validarInputs(duration, distance, elevationGain) ||
        !conditionInput(duration, distance)
      ) {
        return alert("Os dados tem que ser um numero e maior que zero");
      }
      workOut = new Cycling([lat, lng], distance, duration, elevationGain);
    }

    //Adicionar o novo object para um array
    this.workOut.push(workOut);
    console.log(this.workOut);
    //Limpado os inputs

    inputDistance.value =
      inputCadence.value =
      inputDuration.value =
      inputElevation.value =
        "";

    // Mostrado o marcador na tela
    this._renderWorkoutMaker(workOut);
    console.log(this.#mapEvent);
  }
  _renderWorkout(workOut) {}
  _renderWorkoutMaker(workOut) {
    const type = inputType.value;
    L.marker(workOut.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          autoClose: false,
          minWidth: 100,
          closeOnClick: false,
          className: `${type}-popup`,
        })
      )
      .openPopup()
      .setPopupContent(`${workOut.distance}`);
    L.geoJson(workOut.coords).addTo(this.#map);
  }
  // Método que mostram a form da nossa app
  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove("hidden");
    inputDistance.focus();
  }
  _hideForm() {}
  _toggleElevationField(e) {
    //Mudar de corrida a pe para ciclismo
    e.preventDefault();

    inputElevation.closest(".form__row").classList.toggle("form__row--hidden");

    inputCadence.closest(".form__row").classList.toggle("form__row--hidden");
  }
  _moveToPopup(e) {}
  _reset() {}
}

class WorkOut {
  id = (Date.now() + "").slice(-10);
  date = new Date();

  constructor(coords, distance, duration) {
    this.distance = distance;
    this.coords = coords; //Para as coordenadas nos iremos precisar de um array [latitude,longitude]
    this.duration = duration;
  }
}

class Running extends WorkOut {
  // nome;
  cadence;

  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    // Os métodos mais importantes precisam de iniciar com o nosso constructor
    this.calcPace();
  }

  // Calcula o tanto de minutos percorridos numa caminhada
  calcPace() {
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends WorkOut {
  //name;
  speed;

  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    // Os métodos mais importantes precisam de iniciar com o nosso constructor
    this.calcSpeed();
  }

  //Calcula o tanto de kmh percorridos
  calcSpeed() {
    this.speed = this.distance / this.duration;
    return this.speed;
  }
}

const app = new App();
