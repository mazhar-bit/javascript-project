const accountId = 123456
let accountEmail = "test@email.com"
var accountPassword = "12345"
accountCity = 'kpk' // you can write varaiable without using any variable type..
let accountstatus // you can write variable without value of variable also you can call him // its return undefined


// accountId = 34352 this not allowed
accountEmail = 'yaho@gmail.com'
accountPassword = '8765'
accountCity = 'pesh'


/* VAR = Dont use var because var make issues in blck scope and functionl scope 
 javascript has block scope {} issues using var keyword 
In one scop you decleard var name = "test" and another scope you declared same name varaibale so that chnaged the vaule 

LET == The let keyword was introduced in ES6 (2015)

Variables declared with let have Block Scope

Variables declared with let must be Declared before use

Variables declared with let cannot be Redeclared in the same scope

*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountstatus])

