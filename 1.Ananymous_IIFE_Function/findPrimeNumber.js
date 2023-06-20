let array = [2,3,4,5,6,7,8,9,10,11,12,13,15,17,18];
let arr = [];
//anonymous function

let findPrimeNumber = function(array){
     for(value of array){
        let flag = 0;
        for(i=2;i<value;i++){
            if(value%i == 0){
                flag = 1;
            }
        }
        if(flag == 0) arr.push(value);
     }
     return arr;
}
console.log(`Anonymous Function Output:
     PRIME NUMBERS : ${findPrimeNumber(array).join(" ")}`);

//IIFE Function

((array) => {
    let prime = array.filter((value) => {
        let flag = 0;
        for(i=2;i<value;i++){
            if(value%i == 0){
                flag = 1;
            }
        }
        if(flag == 0) return value;
    })
    console.log(`IIFE Function Output:
    PRIME NUMBERS : ${prime.join(" ")}`);
})(array)