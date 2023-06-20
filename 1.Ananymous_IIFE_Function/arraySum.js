let array = [1,2,3,4,5,6,7,8,9];

//Anonymous function

let sumofallnumber = function(array) {
    return array.reduce((prevVal,currVal) =>  prevVal+currVal);
}


console.log(`Anonymous Function Output:
SUM OF ARRAY ELEMENTS IS ${sumofallnumber(array)}`);

//IIFE Function

((array) => {
    let sum = 0;
    for(value of array){
        sum += value;
    }
    console.log(`IIFE Function Output:
SUM OF ARRAY ELEMENTS IS ${sum}`);
})(array);