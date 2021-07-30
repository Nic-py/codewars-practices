function count (string) {  
    // The function code should be here
    let count = {};
    string.split('').forEach(function(s) {
      count[s] ? count[s]++ : count[s] = 1;
    })
     return count;
  }