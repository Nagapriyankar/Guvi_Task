let array = [1,2,3,4,5,6,7,8,9];

// anonymous function
let printOddNumbers = function(array){
   console.log(`Anonymous Function Output:
${array.filter(value => value%2!=0).join(' ')}`);
 }

printOddNumbers(array);

//IIFE
((array) => {
    console.log(`IIFE Function Output:
${array.filter(value => value%2!=0).join(' ')}`);
})(array);
