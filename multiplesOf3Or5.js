function multiplesOf3and5(number) {
  // Good luck!
  let sum = 0;
  for(var i = 1; i < number; i++){
    if((i % 3 === 0 )||(i % 5 === 0)||(i % 3 === 0 && i % 5 === 0)){
      sum = sum + i;
    }
  }
  return sum;
}

console.log(multiplesOf3and5(10));