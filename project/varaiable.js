const accountId = 123456
let accountEmail = "test@email.com"
var accountPassword = "12345"
accountCity = 'kpk'

// accountId = 34352 this not allowed
accountEmail = 'yaho@gmail.com'
accountPassword = '8765'
accountCity = 'pesh'

/* VAR = Dont use var because var make issues in black scop and functionl scop 

LET == The let keyword was introduced in ES6 (2015)

Variables declared with let have Block Scope

Variables declared with let must be Declared before use

Variables declared with let cannot be Redeclared in the same scope

*/
console.table([accountId,accountEmail,accountPassword,accountCity])

