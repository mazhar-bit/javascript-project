//object singleton
// const user = new Object()
// user.name = 'jimmy',
// user.great = '10',
// console.log(user);



// non singleton object
const user ={};

user.name = 'han',
user.great = '10',
user.isloggedin = false,
user.fullname={
    lastname : 'jacky',
    firstname : 'chan',
}
  const user1 = {...user.fullname} 
// console.log(user);


// Object.assign() in javascript its help to give one object of many muiltple objects  
// this Object.assign is simlair to spread opreater
// it good to use in between 2 object mostly

const obj1 = {1 :'a', 2:'b', 3: 'c'}
const obj2 = {3 :'c', 5:'e', 6: 'f'}

// const obj3 = {obj1, obj2}

// we use here Object.assign here

// const obj3 = Object.assign(obj1,obj2)

const obj3 =  {...obj1, ...obj2}

console.log(obj3);



//object many property --------///////////////

// Object.keys // its give key all the object
//Object.values // its give vaule all the object
// Object.entries // its give the vaule with keys in object 

const laptop = {lap : 'mac', ram: '16', ssd: 'good'}
console.log(Object.keys(laptop))
console.log(Object.entries(laptop));
