"strict-mode";
// const lennon = {nome:'Lennon', apelido:"Jango" , anoDeNascimento: 2022-2004 , pais:["Gabriel ", "Wina","Xifu"] , irmãos: [ "gabby" , "ary" , "Dry"] , profissão: "programador"}

// // const aboutMe = prompt("Oq voce gostaria de saber acerca de mim , escolha entre : nome, apelido , anoDeNascimento , pais , irmãos , profissão")

// //   console.log(lennon[aboutMe])

// lennon.email = "lennon@gmail.com"

// console.log(` ${lennon.nome} have ${lennon.irmãos.length} irma`)

const dados ={
   nome:"Lennon",
   anoDeNascimento: 2004,
   bairro:"Liberdade",
   nacionalidade: "Moçambicana",
   idade: function(){

     return 2022-this.anoDeNascimento
   },
   
   pais:["Gabriel", "Wina","Xifu"],
   irmas:["Gabby","Ary", "Dry"],

   summary:function(){

    this.summa= "estudante"

    return this.summa
     
   }
   
}
console.log(`Eu me chamo ${dados.nome} e tenho ${dados.idade()} anos , tenho uma nacionalidade ${dados.nacionalidade} e vivo no bairro da ${dados.bairro} e sou um ${dados.summary()}.`)

