let string = 'My name is naga priyanka. I am learning full stack development';

//anonymous function

let convertTitlecaps = function(string) {
let output = string.map(value => value.charAt(0).toUpperCase()+value.slice(1)).join(" ");
console.log(`Anonymous Function Output: ${output}`);
}

convertTitlecaps(string.split(" "));


//IIFE Function

let output = [];
((string) =>{
    for(value of string.split(" ")){
        output.push(value.charAt(0).toUpperCase()+value.slice(1));
    }
console.log(`IIFE Function Output: ${output.join(" ")}`);
})(string);

