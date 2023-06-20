
let arraywithduplictes = [1,2,3,4,5,6,7,8,4,9,5,4,6];
let array = [];

//anonymous function

let findDuplicates = function(arraywithduplictes){
    for(value of arraywithduplictes){
        if(!array.includes(value))  array.push(value);
    }
    console.log(`Anonymous function:
Array without duplicate : ${array}`);
}


findDuplicates(arraywithduplictes);


//IIFE fUNCTION
let arr =[];
((arraywithduplictes) => {
    for(val of arraywithduplictes){
        if(!arr.includes(val)) arr.push(val);
    }
    console.log(`IIFE function:
Array without duplicate : ${arr}`);
})(arraywithduplictes);

