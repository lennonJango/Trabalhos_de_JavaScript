"Use strict";

const futebol = {
  team1: "Manchester United",
  team2: "Manchester City",

  players: {
    MU: [
      "Cristiano Ronaldo",
      "Pogba",
      "Lukaku",
      "David De Gea ",
      "Diogo Dalot",
      "Brando williams",
      "Bruno Fernandes",
      "Fred",
      "Casimiro",
      "Marcus",
      "Anthony Langa",
    ],

    Mc: [
      "Ederson",
      "Ruben Dias",
      "Rico Lewis",
      "Kevin DE Bruyne",
      "Manuel AKanji",
      "Kalvin Phillips",
      "Riyad Mahrez",
      "Erling Haaland",
      "Klye Walker",
      "Aymeric Laporte",
      "João Cancelo",
    ],
  },
  finalPlayers : ["Lennon", "Lawrence","Calado"],

  ods:{
       score1: 12.5,
       score2: 10,
       score : 5,

  }
};



for(let [x,players] of futebol.finalPlayers.entries()){
  console.log (`O ${players} marcou ${x+1} golos`)
}
 
 let somarPontos =0;
 let media;
  let pontosTotais = Object.values(futebol.ods)
 for (let pontos of pontosTotais){

  somarPontos += pontos;
  console.log(somarPontos)

 media = somarPontos/Object.values(futebol.ods).length;
console.log(media)

 }


 