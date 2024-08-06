// object literals

const stduser = {
    name:'std1',  // Key : vaule
    "age":18,                   // we can give key as a sting "age" and you access like this  console.log(stduser['age']);
    location: 'alsak',
    email:'yahii@.com',
    Logindata:['mon','tue'],
    welcomefuction:  () =>{
        console.log("yesss..")
    }
}
// two way to access the object vaule 
 console.log(stduser.name);
 console.log(stduser['age']);

 
 
 // function log
console.log(stduser.welcomefuction());

stduser.welcomeftn2 = () =>{

    console.log(`welcome student ${stduser.name}`)
}
 
console.log(stduser.welcomeftn2());