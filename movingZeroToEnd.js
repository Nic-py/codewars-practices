 function moveZeros(arr) {
    var j = 0;
    for (var i = 0; i < arr.length; i++) {
      if(arr[i] === 0) {
        arr.splice (i, 1); // find out where the position 0 and with splice () method to delete 0
        j += 1;
               i = i - 1; // calculates the total number of deleted 0
      }
    }
       for (var k = 0; k <j; k ++) {// add array deleted 0;
      arr.push(0);
    }
    return arr;
  }
  let newArray = moveZeros([1,2,0,1,0,1,0,3,0,1]);
  console.log(newArray); 

  ///THIS ALSO WORKS
  var moveZeros = function (arr) {
    var filtedList = arr.filter(function (num){return num !== 0;});
    var zeroList = arr.filter(function (num){return num === 0;});
    return filtedList.concat(zeroList);
  }

  var moveZeros = function (arr) {
    let result = arr.filter(c => c !== 0)
    let count = arr.length - result.length
    
    return result.concat(Array(count).fill(0))
  }

  var moveZeros = function (arr) {
    return [
      ...(arr.filter(n => n !== 0)),
      ...(arr.filter(n => n === 0))
    ];
  }


  var moveZeros = function (arr) {
    for(var i = arr.length - 1; i >= 0; i--) {
      if(arr[i] === 0) {
        arr.splice(i, 1);
        arr.push(0);
      }
    }
    return arr;
  }

