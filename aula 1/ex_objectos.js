"strict-mode";

const mark ={
    
    peso: 79.9 ,
    altura: 1.90 ,
    ibmMark: function(){
        return this.peso/this.altura*2
    }
}
    mark.nome ="Mark Miller"
    

    const john = {
        peso:89.9 ,
        altura: 1.74,
        ibmJohn : function (){
            return this.peso/this.altura*2
        }
    }
         john.nome = "John Smith"
       console.log(john.ibmJohn())

       function comparação(a,b){

         if(a>b){
             console.log(`O ${mark.nome} tem uma massa corporal de ${a} do que o ${john.nome} com uma massa corporal de ${b}`)
         }else if(b>a){
             console.log(`O ${john.nome} tem uma massa corporal de ${b} do que o ${mark.nome} com uma massa corporal de ${a} `)
         }

       }
        comparação(mark.ibmMark(),john.ibmJohn())