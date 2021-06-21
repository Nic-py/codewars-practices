let array1 = ["arp", "live", "strong"];
let array2 = ["lively", "alive", "harp", "sharp", "armstrong"];
let r = [];
for (let i = 0; i < array1.length; i++) {
  for (let j = 0; j <array2.length; j++) {
    if (array2[j].includes(array1[i])) {
      r.push(array1[i])
    }
  }
};
console.log(r);


