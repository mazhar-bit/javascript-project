const arr = [1,2,3,4]

// console.log(arr[1]);

const arr2 = new Array(1,2,3,4);




// Array method  +____++ THIS IS MORE IMPORTANT+++-----++++


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
console.log(slicearray);                    // value but end value will be exculde not added
// console.log(`Real array value after slice ${arraynew}`);
console.log(arraynew)

let splicearray = arraynew.splice(1,3)          // splice give the values which user defiend the range splice(1,3)
// console.log(`${splicearray}`);                  // the real array value after the splice exculed the splice range values 
console.log(splicearray);
// console.log(`Real array after the splice ${arraynew} `);    // and return array without splice range number 
console.log(arraynew);



