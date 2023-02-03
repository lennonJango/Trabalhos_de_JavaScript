"use strict";

// const head = document.querySelector(".header");
// const mess = document.createElement("div");
// mess.classList.add("cookie-message");
// mess.innerHTML =
//   "<p>Aqui temos os nossos cookies</p><button class ='btn--close-cookies'>ok</button>";

// head.prepend(mess);

// document.documentElement.style.setProperty("--color-primary", "blue");
//Mouse event

// const h1fc = function (e) {
//   alert("this event is working Lennon :)");

//   h1.removeEventListener("mouseenter");
// };

// const h1 = document.querySelector("h1");
// h1.addEventListener("mouseenter", h1fc());

// criador de cores
// const criadorDeCores = function (min, max) {
//   return Math.trunc(Math.random() * (min - max) - min);
// };

// const color = () =>
//   `RGB(${
//     (criadorDeCores(0, 255), criadorDeCores(0, 244), criadorDeCores(0, 255))
//   }`;

// const nav = document.querySelector(".nav");
// console.log(nav);

//action

//Implements smooth scrolling

const bntScroll = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");

const tabContents = document.querySelectorAll(".operations__content");
const link = document.querySelectorAll(".nav__link");
const h1 = document.querySelector("h1");
const nav = document.querySelector(".nav");

bntScroll.addEventListener("click", function (e) {
  const scroll = section1.getBoundingClientRect();

  //   window.scrollTo(
  //     scroll.lefts + window.pageXOffset,
  //     scroll.top + window.pageYOffset
  //   );

  section1.scrollIntoView({ behavior: "smooth" });
});

//Page navigation

// const links = document.querySelectorAll(".nav__link").forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     const id = this.getAttribute("href");

//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   });
// });

// Implements delegação
//Na delegação e muito importante usar o target

link.forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.preventDefault();

    if (e.target.classList.contains("nav__link")) {
      const id = e.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  });
});

//Add tabs

//el - elemento html
//usar delegação de um elemento pai
// tabs.forEach(function(el){
//   el.addEventListener("click",function(e){

//   })
// })

tabsContainer.addEventListener("click", function (e) {
  const click = e.target.closest(".operations__tab");

  if (!click) return;
  tabs.forEach((el) => el.classList.remove("operations__tab--active"));
  click.classList.add("operations__tab--active");
  console.log(click.dataset.tab);
  //unhide the information
  tabContents.forEach((el) =>
    el.classList.remove("operations__content--active")
  );
  document
    .querySelector(`.operations__content--${click.dataset.tab}`)
    .classList.add("operations__content--active");
});

//

//A função que contem a transformação
const opacity = function (element, value) {
  if (element.target.classList.contains("nav__link")) {
    const link = element.target;
    const sibling = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");

    sibling.forEach((el) => {
      if (el != link) el.style.opacity = this;
    });

    logo.style.opacity = this;
  }
  // console.log(element.target, this);
};
//Velha forma
// nav.addEventListener("mouseover", function (e) {
//   opacity(e, 0.5);
// });

// nav.addEventListener("mouseout", function (e) {
//   opacity(e, 1);
// });

//Nova forma
nav.addEventListener("mouseover", opacity.bind(0.5));
nav.addEventListener("mouseout", opacity.bind(1));

// The scroll event esta sempre na janela do navegador(window)
//Opção antiga
// window.addEventListener("scroll", function (e) {
//   console.log(this.window.screenY);

//   const coordenadas = section1.getBoundingClientRect();

//   if (this.window.screenY < coordenadas.top) nav.classList.add("sticky");
//   else nav.classList.remove("sticky");
// });
//Melhor opção
// A opção anterior e boa porem tem um problema quando usamos elas em dispositivos mobiles
const obsCallback = function (entires, observer) {
  entires.forEach((entry) => entry);
};

const observer = new IntersectionObserver(obsCallback, {
  root: null,
  threshold: 0.1,
});
observer.observe(section1);

const header = document.querySelector(".header");

const stickyNav = function (entires) {
  const [entry] = entires;
  //console.log(entry);
  if (!entry.intersecting) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0.1,
});

headerObserver.observe(header);
//Como implementar slide view
const allScetion = document.querySelectorAll(".section");

const sectionObserver = function (entires, observe) {
  const [entry] = entires;
  // console.log("vistos");

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observe.unobserve(entry.target);
};

const observerSection = new IntersectionObserver(sectionObserver, {
  root: null,
  threshold: 0.15,
});

allScetion.forEach(function (el) {
  observerSection.observe(el);
  el.classList.add("section--hidden");
});

// Lazy loading image
const lazyImage = document.querySelectorAll("img[data-src]");
//console.log(lazyImage);

const imgObs = function (entires, observe) {
  const [img] = entires;
  // console.log(img);

  if (!img.isIntersecting) return;
  // console.log("a carregar");
  //Como melhorar a resolução da imagem
  img.target.src = img.target.dataset.src;

  img.target.addEventListener("load", function () {
    img.target.classList.remove("lazy-img");
  });
};

const imageObserver = new IntersectionObserver(imgObs, {
  root: null,
  threshold: 0,
});

lazyImage.forEach((el) => imageObserver.observe(el));

//Slider component
const slides = document.querySelectorAll(".slide");
console.log(slides);

slides.forEach((el, i) => (el.style.transform = `translateX(${100 * i}%)`));

const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");

let currentSlide = 0;
//E sempre bom definir o numero de slides que devemos ter
const nrDeSidles = slides.length;

const goToSlide = function (nr) {
  slides.forEach(function (e, i) {
    e.style.transform = `translateX(${100 * (i - nr)}%)`;
  });
};
goToSlide(0);

const nextSlide = function () {
  if (currentSlide == nrDeSidles - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  goToSlide(currentSlide);
  dotSlide(currentSlide);
};

const prevSlide = function () {
  if (currentSlide === 0) {
    currentSlide = nrDeSidles - 1;
  } else {
    currentSlide--;
  }

  goToSlide(currentSlide);
  dotSlide(currentSlide);
};

btnLeft.addEventListener("click", prevSlide);

btnRight.addEventListener("click", nextSlide);

// Evento de teclas
document.addEventListener("keydown", function (e) {
  // Usa as teclas do lado direito e do lado esquerdo para fazer o slide

  if (e.key == "ArrowLeft") prevSlide();

  if (e.key == "ArrowRight") nextSlide();
});

const dotContainer = document.querySelector(".dots");
//console.log(dotContainer);
const createElementDots = function () {
  slides.forEach(function (_, i) {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<button class ='dots__dot' data-slide =${i}></button>`
    );
  });
};
createElementDots();
//Parte do slide que implementamos
const dotSlide = function (slide) {
  document
    .querySelectorAll("dots__dot")
    .forEach((el) => el.classList.remove("dots__dot--active"));

  document
    .querySelector(`.dots__dot[data-slide= '${slide}']`)
    .classList.add("dots__dot--active");
};

dotContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("dots__dot")) {
    const { slide } = e.target.dataset;
    goToSlide(currentSlide);
    dotSlide(currentSlide);
  }
});

//Eventos importantes Dom

// Ao sair da pagina
window.addEventListener("beforeunload", function (e) {
  e.preventDefault();
  console.log("tentou sair da pagina", e);
  e.returnValue = "";
});

//Serve para quando a pagina carregar
window.addEventListener("DOMContentLoaded", function (e) {
  console.log("Pagina carregada");
});
