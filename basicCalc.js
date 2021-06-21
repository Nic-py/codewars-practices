function calculate(num1, operation, num2) {
    //TODO: make a basic calculator. 
     if (operation === "+") {
       return num1 + num2;
     } else if (operation === "-") {
         return num1 - num2;
     } else if (operation === "*") {
         return num1 * num2;
     } else if (operation === "/" && num2 !=0) {
         return num1 / num2;
     } else if (operation === "/" && num2 === 0) {
         return null;
     } else {
         return null;
     }
   };
   console.log(calculate(-3, "/", 0));