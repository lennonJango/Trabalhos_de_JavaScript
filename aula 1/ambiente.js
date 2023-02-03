 
    //dados 
      /*
          teste 1:
      marks massa = 78 kg; marks altura = 1,69 m tall;
       John massa = 92 kg ; marks altura = 1,95 m tall ;

       teste 2:
       marks massa = 95 kg ; marks altura = 1,88 m tall
       Jonh massa = 85 kg ; Jonh altura = 1,76 m tall 
       */

        const massaDoMark = 78
        const alturaDoMark =1.69
         const massaDoJohn = 92
         const alturaDoJohn= 1.95

            const bmiMark = massaDoMark / alturaDoMark**2
             const bmiJohn = massaDoJohn / alturaDoJohn**2

             console.log(bmiMark)
             console.log(bmiJohn)

             const maisAltoDoQueJOhn = bmiMark>bmiJohn;

               console.log(maisAltoDoQueJOhn)

               /*teste 2 gabby massa = 95 kg ; lennon altura = 1,88 m t gabby massa = 85 kg ; Lennon altura = 1,76 m tall */



                const massaDoLennon = 85
                const massaDaGabby = 95
                  const alturaDoLennon = 1.88
                   const alturaDaGabby =1.76

                   const bmiDoLennon = massaDoLennon / alturaDoLennon**2
                    const bmiDaGabby = massaDaGabby /(alturaDaGabby*alturaDaGabby)
                     const lMaisAltoDoQue= bmiDaGabby>bmiDoLennon
                      const lMenosAltoDoQue = bmiDoLennon<bmiDaGabby

                    console.log(bmiDoLennon, bmiDaGabby)
                     console.log (lMaisAltoDoQue, lMenosAltoDoQue)
            
 
                     if(bmiDoLennon<bmiDaGabby){
                          console.log(`O Lennon e mais alto com ${alturaDoLennon} m com um peso de ${massaDoLennon}kg`);
                     }else{ 
                          console.log(`A Gabby e mais alta com ${alturaDaGabby} m com um peso de ${massaDaGabby}kg`)
                            


                     }

                      
            

          

      