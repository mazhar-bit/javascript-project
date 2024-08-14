// its call chaning function 2 or 3 function same time

const num = [3,4,5,6,7,8,2,45,5,6,7,8]

const numres = 
num.map((num)=>(num = num +2))
.map((num)=>(num = num + 1))
.filter((num) => (num > 6))

console.log(numres);