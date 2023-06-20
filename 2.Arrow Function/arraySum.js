let array = [1,2,3,4,5,6,7,8,9];

let sumofallnumber = (array) =>{
    return array.reduce((prevVal,currVal) =>  prevVal+currVal);
}


console.log(`Arrow Function Output:
SUM OF ARRAY ELEMENTS IS ${sumofallnumber(array)}`);