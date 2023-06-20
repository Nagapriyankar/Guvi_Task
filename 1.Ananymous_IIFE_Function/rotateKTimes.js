

/*  1 2 3 4 5 6 7 8 9 
 9 1 2 3 4 5 6 7 8
 8 9 1 2 3 4 5 6 7
 7 8 9 1 2 3 4 5 6  */

//user input

let array = [1,2,3,4,5,6,7,8,9];
let n = 30

 //anonymous function

let arrayRotate = function(array,n){
    if(n>array.length) n = n%array.length;
    if(n==0) {
        return array.join(" ");  
    }else
    return [...array.slice(-n),...array.slice(0,array.length-n)].join(" ");
}
 console.log(`Anonymous Function Output: 
 Array after ${n} rotation : ${arrayRotate(array, n)}`);

//IIFE Function

((array, n) => {
    if(n>array.length) n = n%array.length;
    if(n==0) {
        console.log(`IIFE Function Output: 
 Array after rotation : ${array.join(" ")}`);  
    }else
    console.log(`IIFE Function Output: 
 Array after rotation : ${[...array.slice(-n),...array.slice(0,array.length-n)].join(" ")}`);
})(array, n)

 