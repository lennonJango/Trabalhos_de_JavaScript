"use strict";

const restaurante = {
  menuDeEntrada: [
    "Pao de alho",
    "pao simples",
    "nozes",
    "rodelas de cebola",
    "Sopa",
  ],
  menuPrincipal: [
    "Pizza",
    "Costeletas",
    "Rodizio Especial",
    "Jardineira",
    "Beef a portuguesa",
  ],

  bebidas: {
    Agua: "Agua",
    refresco: ["coca-cola ", "Fantã", "Sparleta", "Sprite"],
    bebidasAlcoílicas: ["Vinho", "Cerveja", "vodka"],
  },

  horários: {
    sábado: {
      entrada: 7,
      saída: 21,
    },
    Domingos: {
      entrada: 9,
      saída: 22,
    },
  },
};


restaurante.dono  ||= "Lennon Jango";
console.log(restaurante.dono)
 restaurante.gerente &&= "Gabriela";
  console.log(restaurante.gerente)
  restaurante.clienteDoMes ??= "Ary Jango"
   console.log(restaurante.clienteDoMes)
   console.log(restaurante)
