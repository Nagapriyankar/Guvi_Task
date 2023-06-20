let array = ['ridhin', 'madam', 'work', 'course', 'radar'];

//anonymous function
let arr = [];
let findPalindrome = function(array){
    for(value of  array){
        if(value == value.split("").reverse().join("")) arr.push(value);
    }
    return arr
}

console.log(`Anonymous Function Output:
PALINDROME : ${findPalindrome(array).join(" ")}`);

//IIFE Functionss


((array) => {
    let output = array.filter(value => value == value.split("").reverse().join("")).join(" ")
    console.log(`IIFE Function Output:
PALINDROME : ${output}`);
})(array)