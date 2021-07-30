const person = {};
console.log(person);
//create new properties for the person object

person.name = "Nichodemus";
console.log(person);
//console.log(Object.entries(person));
person["age"] = 50;
console.log(person);

//function references
let getAge = () => {
   return person.age;
};

person.myAge = getAge; //getAge is a reference to the function getAge (line 12)
console.log(person.myAge())
