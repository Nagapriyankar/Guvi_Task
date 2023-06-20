let string = 'My name is naga priyanka. I am learning full stack development';

//arrow function

let convertTitlecaps = (string) => {
let output = string.map(value => value.charAt(0).toUpperCase()+value.slice(1)).join(" ");
console.log(`Arrow Function Output: ${output}`);
}

convertTitlecaps(string.split(" "));