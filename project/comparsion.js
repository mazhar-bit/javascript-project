// console.log(2 > 0) //=> true
// console.log(0 > 2) //=> false

// console.log("2" > 1); // =. true // its give result (true) becases javascript change the string in to number 
// console.log("02"< 1); 

// dont use this tyoe of conversion 
console.log( null > 0); //In JavaScript, when you compare null with a number using relational operators (>, <, >=, <=), null is first converted to a number. The conversion of null to a number results in 0. So, the comparison becomes:0 > 0 This is false because 0 is not greater than 0.
 console.log(null == 0);
 console.log(null >= 0);

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);

console.log(undefined < 0);
