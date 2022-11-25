function reverseThisString(string){
    var reverse= "";
    for ( var i=string.length-1; i>= 0; i--){
        reverse += string[i];
    }
    return reverse;
}
console.log(reverseThisString("Hello"));
//return string.split("").reverse().join("");

function swapCase(string) {
    var swap = "";
    for (var i = 0; i < string.length; i++) {
        const c = string[i];
        if (c === c.toLowerCase()) {
          swap += c.toUpperCase();
        } else if (c === c.toUpperCase()) {
          swap += c.toLowerCase();
        }
      }
      return swap;
}
console.log(swapCase("Hello World"));

function toCelcius(array) {
  return array.map((t) => ((t - 32) * 5) / 9);
}
console.log(toCelcius([23, 32, 41, 50, 59]));

function passOrFail(array){
  return array.map((marks) => marks >= 75);
}
console.log(passOrFail([20, 30, 50, 80, 90, 100]));

function germanNumbers(){
  const cardinalNumbers = [2,3,4,5,6];
  const germanNumbers = ['zwei', 'drei', 'vier', 'fünf', 'sechs'];
  var germanArray =[];
  for (var i=0; i<cardinalNumbers.length; i++){
    germanArray[i] = cardinalNumbers[i] + " is " + germanNumbers[i];

  }
  return germanArray;
}
console.log(germanNumbers());

function returnPrimeNumbers(){
  const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  const primeNumbers = numbers.filter()
  for (let i=2; i < numbers; i++){
    if (number % i == 0)
    return false;
    return true;
  }
  return 
}

function returnPrimeNumbers(){
  const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  const primeNumbers = numbers.filter((number)=>{
    if (number <= 1)
            return false;
      for (let i = 2; i < number; i++)
          if (number % i == 0)
              return false;
      return true;
  });
  return primeNumbers;
}
console.log(returnPrimeNumbers());

function replaceNum(){
  for (let i=1; i<=100; i++){
     if (i % 3 === 0 && i % 5 === 0) {
      console.log("CSC225 RULES I LOVE JAVASCRIPT");
     }
     else if (i % 3 === 0) {
      console.log("CSC 225 RULES");
     }
     else if (i % 5 === 0 ){
      console.log("I LOVE JAVASCRIPT");
     }
     else {
      console.log(i);
     }
  }
}
console.log(replaceNum());