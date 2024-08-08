
function saynumber() {
    console.log(7);
    
}

saynumber // its just show here referce only and do noting 
// saynumber() // here its excute the function only ()

function twonumber(num1 , num2){
    // num3 =  num1 + num2              // method first to declared
    // console.log(num3);  
    //return num3               // if i remove the return keyword from here so this num3 vaule will not print  
                                // in const result    
    return num1 + num2
}
const result = twonumber(2,4)
console.log(result);



function username(name){
 
     if (!name)
     {
         console.log("write it bro");
         return 
     }
     else(name === String);{

        return `${name} is singer`
    
     }
    
}

 console.log (username())


 // Rest oprater /// --// its samiler to spread oprater it depend on your use only

 const cart = (item1,item2,...item) =>{
     return item
 }
 console.log (cart(100,23,45,67))