// what is the this keyword 
// in simple function you can use (this) keyword but you cannot use in arrow function 

const user={
    name:'eddie',
    price:334,
    welcomeuser(){
         console.log(`hii ${this.name} `)
         console.log(this);
         
    }
}

// console.log(user.welcomeuser())
user.welcomeuser()
user.name = 'GB'
user.welcomeuser()


const arr = (num , num2)=>  num + num2


// this is implicate arrow in this you don't need arrow function
const result = (num1 , num2) => (
   num1 + num2

)

 console.log( result(4,2));
 