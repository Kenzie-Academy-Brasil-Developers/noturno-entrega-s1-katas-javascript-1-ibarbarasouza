function oneThroughTwenty() {
let meuarray = []


 for (contador = 1; contador < 21; contador++) {
  meuarray.push(contador)
 }
console.log(meuarray)
}
oneThroughTwenty();



function evensToTwenty() {
    
  let meuarray = []
  let numpares =[]

   for (contador = 1; contador < 21; contador++) {
     meuarray[contador]= contador
     if (meuarray[contador] % 2 == 0){
     numpares.push(contador)
   }
  }
  console.log(numpares)
  }
evensToTwenty();



function oddsToTwenty() {
    
  let meuarray = []
  let numimpares =[]

   for (contador = 1; contador < 21; contador++) {
     meuarray[contador]= contador
     if (meuarray[contador] % 2 == 1){
     numimpares.push(contador)
   }
  }
  console.log(numimpares)  
}
oddsToTwenty();



function multiplesOfFive() {
  let meuarray = []
  let Mult5 =[]

   for (contador = 1; contador < 101; contador++) {
     meuarray[contador]= contador
     if (meuarray[contador] % 5 == 0){
     Mult5.push(contador)
   }
  }
  console.log(Mult5)  
}
multiplesOfFive();  

 
function squareNumbers() {
    
  let QuadradosPerfeitos =[]

   for (contador = 1; contador < 11; contador++) {
      QuadradosPerfeitos.push(contador ** 2)
     }
 console.log(QuadradosPerfeitos)  
}
squareNumbers();


function countingBackwards() {
    
    let meuarray = []
    
     for (contador = 1; contador < 21; contador++) {
       meuarray.push(contador)
     }
    meuarray.reverse ();
    console.log(meuarray)
    }
countingBackwards();


function evenNumbersBackwards() {
  let meuarray = []
  let numpares =[]

   for (contador = 1; contador < 21; contador++) {
     meuarray[contador]= contador
     if (meuarray[contador] % 2 == 0){
     numpares.push(contador)
   }
  }
  numpares.reverse();
  console.log(numpares)
}
evenNumbersBackwards();



function oddNumbersBackwards() {
    
  let meuarray = []
  let numimpares =[]

   for (contador = 1; contador < 21; contador++) {
     meuarray[contador]= contador
     if (meuarray[contador] % 2 == 1){
     numimpares.push(contador)
   }
  }
  numimpares.reverse();
  console.log(numimpares) 
}
oddNumbersBackwards();


function multiplesOfFiveBackwards() {
    
  let meuarray = []
  let Mult5 =[]

   for (contador = 1; contador < 101; contador++) {
     meuarray[contador]= contador
     if (meuarray[contador] % 5 == 0){
     Mult5.push(contador)
   }
  }
  Mult5.reverse();
  console.log(Mult5)
}
multiplesOfFiveBackwards();


function squareNumbersBackwards() {

  let QuadradosPerfeitos =[]

   for (contador = 1; contador < 11; contador++) {
      QuadradosPerfeitos.push(contador ** 2)
     }
  QuadradosPerfeitos.reverse()
 console.log(QuadradosPerfeitos)  
}
squareNumbersBackwards();
