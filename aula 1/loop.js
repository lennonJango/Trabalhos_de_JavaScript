"strict-mode";
 
// for( let i = 1 ; i<=2 ; i++){
//     console.log(i)
// }

// const info =[ "bill", "bat" ,"Tom"]
//   for ( let i = 0 ; i<info.length ; i++){

//      console.log(`Os nomes dos meus gatos sao ${info[i]}`)
      
//   }

//    const nomes=[ "Lennon","Gabby","Ary"]
//      for(let i = 0 ; i<nomes.length ; i++){
//          console.log(`O nome da pessoa e ${nomes[i]}`)
//      }

   //  
   

  function calcTips(bill){
     return bill>= 50 && bill<=300 ? bill*0.15 : bill*0.2 ;

   }

  
   const bill =[ 22,295,176,440,37,105,10,1100,86,52]
   const tip =[]
   const total =[]


   for(let i = 0 ; i<bill.length ; i++){

         tip.push(calcTips(bill[i]))
         total.push(tip[i] + bill[i])
   }


     console.log(`O valores das gorjetas sao ${tip}`)
     console.log(`o valores totais sao ${total}`)


      const calcAverage = function (arr){

         let sum = 0
          for(let i = 0 ; i<arr.length ; i++){

              sum= sum +arr[i]
          }
           
           return sum/arr.length
      }

          console.log(calcAverage([4,1,1,2]))