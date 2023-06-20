let array = [1,2,3,4,5,6,7,8,9];

// Arrow function
let printOddNumbers = (array) => {
   console.log(`Arrow Function Output:
Odd numbers: ${array.filter(value => value%2!=0).join(' ')}`);
 }

printOddNumbers(array);