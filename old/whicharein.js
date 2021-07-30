let array1 = ["arp", "live", "strong"];
let array2 = ["lively", "alive", "harp", "sharp", "armstrong"];


// for (let i = 0; i < array1.length; i++) {
//   for (let j = 0; j < array2.length; j++) {
//     if (array1[i] === array2[j]) {
//       console.log(array2[j])
//     } 
// };
for (let i = 0; i < array1.length; i++) {
  for (let j = 0; j < array2.length; j++) {
    if (array1[i] === array2[j]) {
      console.log(array1[j])
    }
  }
}