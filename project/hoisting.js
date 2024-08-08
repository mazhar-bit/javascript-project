// hoisting is declaring of the function like you create the function and you can access every where 
// but if your create function with varabile like (const user = function (){} ) so in that case
// you can't use before function declaring

console.log(one(3));
function one(num){

    return num +1 
    
}

// 2nd function

console.log (twonum(4))

const twonum = function (num){
    return num +2
}


 
