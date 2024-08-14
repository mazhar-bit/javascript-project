// reduce function its give one value of the array 
// its take 2 initial  value and current value
// this 0 is the initial value 


const res = [1,2,3,4,5]

const value = res.reduce((acc, currentvalue)=>(
    console.log(`acc value ${acc} and this currentvalue ${currentvalue}`),
    
   acc + currentvalue
),0)

console.log(value);


let = studentDetails = [
    {
        name: 'dinesh',
        age: 20,
        marks: 30,
        Grade: 'F'
    },
    {
        name: 'divi',
        age: 20,
        marks: 60,
        Grade: 'B'
    },
    {
        name: 'vignesh',
        age: 30,
        marks: 80,
        Grade: 'A'
    }]

     const result = studentDetails.reduce((acc, item)=> ( acc + item.marks),0)

     console.log(result)