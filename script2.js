/*

let total = 0, count = 1;
while (count <= 10) {
  total += count;
  count += 1;
}
console.log(total);

*/

//console.log(sum(range(1, 10)));

function openOrSenior(data){
    // ...
    function determineMembership(member){
        return (member[0]>=55 && member[1]>7) ? 'Senior': 'Open';
    } return data.map(determineMembership)
    
  };
console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]));

  
//BELOW WORKS WELL

/*
  function openOrSenior(data){
    // Senior = 55+ and 7+
    var result = [];
  
    for(var i = 0; i < data.length; i++){
      result[i] = (data[i][0] >= 55 && data[i][1] > 7) ? 'Senior' : 'Open';
    }
  
    return result;
  }
  console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]));
  */

