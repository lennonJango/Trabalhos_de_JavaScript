"use strict";

const movimentos=[220,300,789,900,100,-0,500];

   for(const movimento of movimentos){
      if(movimentos>0){

        console.log( `O seu movimento foi de ${Math.abs(movimentos)}`);
      }else{
        console.log( `O seu movimento foi de ${(movimentos)}`);
      }
      

   }


   movimentos.forEach(function(movimentos){

    if(movimentos>0){

        console.log( `O seu movimento foi de ${Math.abs(movimentos)}`);
      }else{
        console.log( `O seu movimento foi de ${(movimentos)}`);
      }

    
   })

   const set1 = ([1,"Lennon"]);
   console.log(set1.entries(1))

      set1.forEach(function(value,key,map){

        console.log(`${value},${key}`)

      })
      

   const map1 = new Map();
   map1.set("Moz","moçambicano");
   map1.set("SA","Africa do sul")
   map1.set("AG","Angola")
   console.log(map1)

   map1.forEach(function(value,key,map){

       console.log(`${key} , ${value}`)
   })