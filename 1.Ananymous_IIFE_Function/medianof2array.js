let array1 = [1,5,23,3,4,9,14,15,20];
let array2 = [12,16,21,34,1,2,7,0];

//anonymous function

let sort = function(array1, array2){
    let array3 = [...array1,...array2];
    array3.sort((a,b) => a-b);
    return array3;
}


let findMedian = function(array){
    if(array.length %2 == 0)
        console.log(`Anonymous function output: 
    Median of 2 arrays: ${array[array.length/2]+array[(array.length/2)-1]/2}`)
    else
        console.log(`Anonymous function output: 
        Median of 2 arrays: ${array[Math.floor(array.length/2)]}`)
}

findMedian(sort(array1, array2));


//IIFE Function


((array) => {
    if(array.length %2 == 0)
        console.log(`IIFE function output: 
    Median of 2 arrays: ${array[array.length/2]+array[(array.length/2)-1]/2}`)
    else
        console.log(`IIFE function output: 
        Median of 2 arrays: ${array[Math.floor(array.length/2)]}`)
})(sort(array1, array2))