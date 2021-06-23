const array = [5, 8, 6, 3, 4, 7, 13, 24, 11]
const oddNums = [];
//push odd numbers in the array to oddnums
for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 !== 0) {
    oddNums.push(array[i])
  }
}
// console.log(oddNums); // [5, 3]
let sortedOdds = oddNums.sort((a, b) => a - b); //[3, 5, 7, 11, 13]
// console.log(sortedOdds)

//REPLACE ODD ELEMENTS WITH sorted ODD NUMBERS
for (let k = 0; k < array.length; k++) {
if (array[k] % 2 !== 0) {
    array[k] = sortedOdds.shift();
//   for(let j = 0; j < sortedOdds.length; j++) {
//     array.splice(k, 1, sortedOdds[j])
//   }
}
}
console.log(array)