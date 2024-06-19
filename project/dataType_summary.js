// # Primitive (call by value) => that kind datatype in which value call by values
// 7 types => string, Number, null =>(empty), boolean, undefined, symbol, BigInt, 

// all expamle disscuse in dataType file expect symbol 

const number = Symbol('233')
const idnumber = Symbol('123')
// console.log(number == idnumber);
// here symbol make values unquie like if you make commpoents of button and want uniqe some place so you can use symbol


// nonPrimitive (Reference) => Array, object, Function

const hero = ['ironman','batman', 'superman']

let student = {
    name:'zeb',
    age : 25    
}


// the function typeof is alwways return function 
const ftn = () =>{

     console.log('testt');
}

// console.log(typeof ftn);
// ftn()

// ========================================================
// 2 types of memory in javascript
//stack (Primitive)   // Heap (Non-Primitive)


let stdname = 'mancall'

let newname = stdname
newname = 'wlaterwhite'

console.log(stdname); // its not change the old name becaseus its give you copy of the value not real one like stack expamle data store in stack form not clear old data
console.log(newname); 


// Heap Example 

let obj = {
  name:'hank',
  age:45
}

 let obj2 = obj

 obj2.name = 'gus'
 obj2.age = 50

 console.log(obj.name); // here its change the value of the obj beacuse its give the refercen of the whole heap and data store in the heap 
 console.log(obj2.name);

