let array = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
// console.log(array.filter(odds => odds % 2 === 1))
/*FILTER ODD NUMBERS,
SORT THE FILTERED ODD NUMBERS IN 
ASCENDING ORDER
*/
let oddNums = array.filter(number => number % 2 !== 0)
let sortedOddNums = oddNums.sort((x, y) => x-y);
// console.log(sortedOddNums);
let sortednumbers = array.map(a => a % 2 !== 0 ? sortedOddNums.shift() : a);
console.log(array)
console.log(sortednumbers);

// console.log(sortedOddNums)
// let sortArray = array.map(numbers => numbers % 2 !== 0 ? sortedOddNums.shift() : numbers) //numbers%2 === 1 DOEST NOT WORK
//return sortArray;
// let sortedArrayOdd = oddNums.sort((a, b) => a-b)

// console.log(sortArray) 
// console.log('[1, 8, 3, 6, 5, 4, 7, 2, 9, 0]') 

// console.log(sortedArrayOdd)

// let sortedArray = (numbers) => {
//   let oddNums = numbers.filter(a => a % 2);
//   console.log(oddNums);
// }


function sortArray(array) {
    var odds = [];
    //loop, if it's odd, push to odds array
    for (var i = 0; i < array.length; ++i) {
      if (array[i]%2 !== 0) {
        odds.push(array[i]);
      }
    }
    //sort odds from smallest to largest
    odds.sort(function(a,b){
      return a-b;
    });
    
    //loop through array, replace any odd values with sorted odd values
    for (var j = 0; j < array.length; ++j) {
      if (array[j]%2 !== 0) {
        array[j] = odds.shift();
      }
    }
    
   return array;
  }