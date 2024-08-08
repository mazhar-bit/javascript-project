//nested function in which child can access parents function

function one() {
  
    const onevaule = 'red'
    
     
    function two(){
        console.log(onevaule);
           const twovaule = 'bule'
           
            
        }

two()
// console.log(twovaule);

}
one()