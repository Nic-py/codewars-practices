let array = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
// console.log(array.filter(odds => odds % 2 === 1))

let sortedOddNums = array.filter(number => number % 2 === 1).sort((a, b) => a-b);
// console.log(sortedOddNums)
let sortArray = array.map(numbers => numbers % 2 === 1 ? sortedOddNums.shift() : numbers)
//return sortArray;
// let sortedArrayOdd = oddNums.sort((a, b) => a-b)

console.log(sortArray) 
console.log('[1, 8, 3, 6, 5, 4, 7, 2, 9, 0]') 

// console.log(sortedArrayOdd)

// let sortedArray = (numbers) => {
//   let oddNums = numbers.filter(a => a % 2);
//   console.log(oddNums);
// }