let word = "33"
let word1 = "22we"  // try value null its give 0 // try undefined its give NaN // try boolen true/false 
 
// if the word is number and text too then how to convert this word values " its gives NaN "

console.log(typeof word);

let isnumber = Number(word)

let isnum = Number(word1)

console.log(typeof isnumber);

console.log(isnum)

//try to conver the string in number 
// '33' => 33
// '44rt' => NaN
// null =>  0 
// true/false => 1/0
// undefined => NaN

let login = 1

let checklogin = Boolean(login)

// console.log(checklogin)
 
// tryin to convert the boolen 
// 1 => true / false => 0 
// "" => false
// "name" => true

// convert number into string

let str1 = "1"
let str2 = "2"
let str3 = str1 + str2 
console.log(str3); // it result will be 12 beacause both number are strings


console.log(1 + "2"); // =>12
console.log("1" + 2); // => 12 
console.log("1" + 2 + 2); // => 122 here its convert all the string values
console.log(1 + 2 + "2"); // => 32 because intger came first then string value


let num1, num2, num3 

num1 = num2 = num3 = 2+2 // varaiable assing method 

// perfix n postfix 

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
// If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.

// If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.


