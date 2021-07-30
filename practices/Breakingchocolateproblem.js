// function breakChocolate(n,m) {
//     if (n == 0 || m == 0) return 0;
//     return n * m -1;
//     }



function cookie(name){
    if(typeof name === "string") {
        return "Who ate the last cookie? It was Zach!";
    } else if (typeof name === 'number') {
        return "Who ate the last cookie? It was Monica!"
    } else {
        return "Who ate the last cookie? It was the dog!"
    }
};
  console.log(cookie(3));

/*       // ...
      if (typeof name === "string") {
        return "Who ate the last cookie? It was Zach!";
      }
      else if(typeof name === "float"){
        return "Who ate the last cookie? It was Monica!";
      } 
      else {
        return "Who ate the last cookie? It was the dog!";
      } */
    
        