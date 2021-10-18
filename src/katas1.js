function oneThroughTwenty() {
let meuArray = []


 for (contador = 1; contador < 21; contador++) {
  meuArray.push(contador)
 }
console.log(meuArray)
}
oneThroughTwenty();



function evensToTwenty() {
    
  let meuArray = []
  let numPares =[]

   for (contador = 1; contador < 21; contador++) {
     meuArray[contador]= contador
     if (meuArray[contador] % 2 == 0){
     numPares.push(contador)
   }
  }
  console.log(numPares)
  }
evensToTwenty();



function oddsToTwenty() {
    
  let meuArray = []
  let numImpares =[]

   for (contador = 1; contador < 21; contador++) {
     meuArray[contador]= contador
     if (meuArray[contador] % 2 == 1){
     numImpares.push(contador)
   }
  }
  console.log(numImpares)  
}
oddsToTwenty();



function multiplesOfFive() {
  let meuArray = []
  let mult5 =[]

   for (contador = 1; contador < 101; contador++) {
     meuArray[contador]= contador
     if (meuArray[contador] % 5 == 0){
     mult5.push(contador)
   }
  }
  console.log(mult5)  
}
multiplesOfFive();  

 
function squareNumbers() {
    
  let quadradosPerfeitos =[]

   for (contador = 1; contador < 11; contador++) {
      quadradosPerfeitos.push(contador ** 2)
     }
 console.log(quadradosPerfeitos)  
}
squareNumbers();


function countingBackwards() {
    
    let meuArray = []
    
     for (contador = 1; contador < 21; contador++) {
       meuArray.push(contador)
     }
    meuArray.reverse ();
    console.log(meuArray)
    }
countingBackwards();


function evenNumbersBackwards() {
  let meuArray = []
  let numPares =[]

   for (contador = 1; contador < 21; contador++) {
     meuArray[contador]= contador
     if (meuArray[contador] % 2 == 0){
     numPares.push(contador)
   }
  }
  numPares.reverse();
  console.log(numPares)
}
evenNumbersBackwards();



function oddNumbersBackwards() {
    
  let meuArray = []
  let numImpares =[]

   for (contador = 1; contador < 21; contador++) {
     meuArray[contador]= contador
     if (meuArray[contador] % 2 == 1){
     numImpares.push(contador)
   }
  }
  numImpares.reverse();
  console.log(numImpares) 
}
oddNumbersBackwards();


function multiplesOfFiveBackwards() {
    
  let meuArray = []
  let mult5 =[]

   for (contador = 1; contador < 101; contador++) {
     meuArray[contador]= contador
     if (meuArray[contador] % 5 == 0){
     mult5.push(contador)
   }
  }
  mult5.reverse();
  console.log(mult5)
}
multiplesOfFiveBackwards();


function squareNumbersBackwards() {

  let quadradosPerfeitos =[]

   for (contador = 1; contador < 11; contador++) {
      quadradosPerfeitos.push(contador ** 2)
     }
  quadradosPerfeitos.reverse()
 console.log(quadradosPerfeitos)  
}
squareNumbersBackwards();
