"use strict";

 let modal = document.querySelector(".hidden")
   console.log(modal)
 let overlay = document.querySelector(".overlay")
 let btnClose  = document.querySelector(".close-modal")
  let btnShowModal = document.querySelectorAll(".show-modal")
  
  overlay.classList.add("hidden")

   for(let i = 0 ; i<btnShowModal.length; i++){
     console.log ( btnShowModal[i].textContent)
       btnShowModal[i].addEventListener("click",function(){

           modal.classList.remove("hidden")
        
            overlay.classList.add("hidden")
           document.body.style.backgroundImage = "blur 3px"
       })
   }
 
 function sair (){
  btnClose.addEventListener("click",function(){

        modal.classList.add("hidden")
        
   })

 }
    sair()
  
    document.addEventListener("keypress", function(e){
      
     

      if(e.key === "q"){

         modal.classList.add("hidden")
      }


    })
  