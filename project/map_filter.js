// why we use filter insted of foreach() loop becaues foreach() loop will not return the value 
// filter() take arrow() function but its return the value 

const arr = [2,3,5,6,78,3,4]

const value = arr.filter((num)=>(
 num >10
))
console.log(value);
