const arr = [1,2,3,4]

// console.log(arr[1]);

const arr2 = new Array(1,2,3,4);




// Array method  +____++ THIS IS MORE IMPORTANT+++-----++++
// PUSH, POP, UNSHIFT, SHIFT, JOIN

const arr3=[1,2,3,4,5]

arr3.push(7)            
arr3.pop()                  // it delete the value from the end of the array 

arr3.unshift(9)             // it add the value in start of the arrry

arr3.shift()                // the delete the value from the start in // 

// console.log(arr3.includes(4));      // its help to check the value in array and reture boolean value

// console.log(arr3.indexOf(0));        // find the index value  which not exixted in the array its return the -1 value other wise give you correct value

const newarr = arr3.join()           // join() help to bend the array and convert in to string from "check the typeof array"

// console.log(arr3);
// console.log(newarr);
// console.log(typeof(newarr))


// ============== slice ==== splice ===================///

const arraynew = [0,1,2,3,4,5]

let = slicearray = arraynew.slice(1,3)      // in slice(1,3) user give the range of the values in array start and end 
// console.log(slicearray);                    // value but end value will be exculde not added
// console.log(`Real array value after slice ${arraynew}`);
// console.log(arraynew)

let splicearray = arraynew.splice(1,3)          // splice give the values which user defiend the range splice(1,3)
// console.log(`${splicearray}`);                  // the real array value after the splice exculed the splice range values 
// console.log(splicearray);
// console.log(`Real array after the splice ${arraynew} `);    // and return array without splice range number 
// console.log(arraynew);



// =====================-----------  Spread() Opreater --- concat() =============--------------------

const marvel_hero = ["ironman","hulk", "captain"]

const dc_hero = ["superman","batman","wonder woman"]

// here we push 1 array into other array but didn't give you expected result 
//  marvel_hero.push(dc_hero)         

// so we use concat() opreater or spread opreater 

// let arrvalue = marvel_hero.concat(dc_hero)
// console.log(arrvalue);

let one= 'class' 

const newarry = [...one]  // basiclly spread oprater spread the anything and return array or object into object form

const all_hero = [...marvel_hero,...dc_hero]
console.log(all_hero);


// you can do with object and also with string with too=================

// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };
// const combinedObject = { ...obj1, ...obj2 };
// console.log(combinedObject); 
// Output: { a: 1, b: 2, c: 3, d: 4 }



// ===================== Split===============================

// Functionality: The split method is used on strings to split them into an array of substrings based on a specified separator.
// Usage: split takes a string and divides it into an array of substrings wherever the specified delimiter occurs.


let word = 'yes,im a bad'

test = word.split(' ').reverse().join(' ')

console.log(test);


//=================== flat ==========
// its help to complex array [2,3,4,1[2,3,5,3],[4,3,5,2,[3,4,2]]] return in one array form [3,1,5,1,4,5] 

const ted = [4,5,2,5,[4,3,5,1,5],['yy','gt',3]]

 let ted2 = ted.flat(Infinity)

console.log(ted2);


// ============== isArray=======from===========of====
// isArray help to check is this value array or not 
// (from) help string to make the array 
// (of) help give new array from set of element

console.log(Array.isArray('ted'));
console.log(Array.from('ted'));

let rose = 100
let rose1 = 200
let rose3 = 300

console.log(Array.of(rose,rose1,rose3));



