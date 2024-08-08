// object with function 
const user = {
    name:'yyahpo',
    gread : '10'
}

function classuser(obj){
    console.log (`${obj.name} is from class ${obj.gread} `);
} 

// this this first way to pass the object in function 
 // classuser(user)


// object inside the function
classuser(
    {
         name:'big apple',
         gread:'67'   
    }
)

// Array in the function 

const arr1 = [23,45,67,34]

function arrayobj(obj){
     return obj[3]
}

 console.log (arrayobj(arr1))

