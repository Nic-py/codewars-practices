/*highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
*/


/*

  function highestAndLowest(numbers){
    numbers = numbers.split(" ");
    return Math.max.apply(null, numbers) + " " +  Math.min.apply(null, numbers)
  }
  
  let nums=(highestAndLowest("1 2 3 4 5"))
  console.log(nums)
*/

function highAndLow(numbers){
    numbers=numbers.split(" ");
    return Math.max.apply(null, numbers) + " "+ Math.min.apply(null, numbers);
  };
  console.log(highAndLow("1 2 -3 4 5"));