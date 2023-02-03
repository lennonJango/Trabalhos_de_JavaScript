 /* const age = 18


   if (age<=18){

         console.log(`Voce tem ${age} anos voce pode tirar a sua carta`)
   }else{
        console.log(`Voce ainda nao tem ${age} ,anos ainda nao podes tirar a sua carta`)
   }
   */

     
   const hasDriverLicense = true;//A
    const hasGoodVision = true;//B

    console.log(hasDriverLicense && hasGoodVision);
     console.log(hasDriverLicense || !hasGoodVision);// Quando temos duas variaveis que sao true o valor sera true
     console.log(hasDriverLicense && !hasGoodVision)
     console.log( !hasDriverLicense || !hasGoodVision)

     const shouldDrive = hasDriverLicense && hasGoodVision
       if(shouldDrive){

             console.log('Sarah have a driver license and good vision')
       }else{
            console.log("Sarah don't have a driver license and good vision")
       }

          //section 2 
          const dinheiro = true;
         const poupar = false ;
         console.log( dinheiro || poupar);
           const deviaPoupar = dinheiro && !poupar;
              if(deviaPoupar){
                 
                   console.log('voce pode usar o seu dinheiro :) ')
              } else{
                  
                   console.log ('Voce devia poupar mais o seu dinheiro :(')
              }