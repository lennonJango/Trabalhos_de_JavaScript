"strict mode";

     
// function cortadorDeFrutas (frutas){

//     return frutas*4
// }

//  function maquinaDeFrutas(laranja , banana){

//       const processoLaranja = cortadorDeFrutas(laranja)
//       const processoBanana = cortadorDeFrutas(banana)
//        let processoTotal = `Voce tem um sumo de ${processoLaranja} laranjas e com ${processoBanana} bananas`
//         return processoTotal
//  }
    
//   console.log(maquinaDeFrutas(12,8))


    // idade dos clientes 
/*
     function nascimento(dataDoNascimento){

         return 2008-dataDoNascimento
     }

      function anoDeNascimento(Ana , Roberto , Carlos){

          const paciente1 = nascimento(Ana)
           const paciente2 =nascimento(Roberto)
            const paciente3 = nascimento(Carlos)
           const AA =[`O  Paciente1 nasceu no ano ${paciente1} ` ,` O paciente2 nasceu no ano ${paciente2}`,
           ` O Paciente3 nasceu no ano ${paciente3}`]
          

            return AA

      }

       console.log(anoDeNascimento(18,19,20))
       */

    //    function calcAverage(a,b,c){

    //       return (a+b+c)/3
    //    }

    //     let scoreOFKoalas = calcAverage(85,54,41)
    //     let scoreOFDolphins = calcAverage(23,34,27)
    //      console.log(scoreOFDolphins,scoreOFKoalas);

    //      function checkWinner(dolphins,koalas){

    //            if( dolphins >= 2*koalas){

    //                let dolphinsW = `Os dolphins ganharam com ${dolphins}`
                    
    //                return dolphinsW
    //            }else if( koalas >= 2*dolphins){

    //                 let koalasW = ` Os koalas ganharam com ${koalas}`
                    
    //                  return koalasW
    //            }else {

    //                  let noWinner = `Ninguém ganhou`
    //                  return noWinner
                    
    //            }
    //      }
         
    //         console.log(checkWinner(scoreOFDolphins,scoreOFKoalas))
          

    function billTips(billMoney){
        return billMoney >300 && billMoney<100 ? billMoney*0.15 : billMoney*0.5;
    }

      const money= console.log(billTips(300)) 

       function payment(pay){

        const prato = "prato2"

        switch(prato){

             case "prato1":
                 console.log(billTips(0)*0)
             break
             case "prato2":
                console.log(billTips(2)*150)
              break
        }
          
          

       }

        console.log(payment(money))