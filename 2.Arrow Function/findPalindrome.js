let array = ['ridhin', 'madam', 'work', 'course', 'radar'];

//arrow function
let arr = [];
let findPalindrome = (array) => {
    for(value of  array){
        if(value == value.split("").reverse().join("")) arr.push(value);
    }
    return arr
}

console.log(`Arrow Function Output:
PALINDROME : ${findPalindrome(array).join(" ")}`);