const numbers = [50,70,90,98,100];
const twoMulNumbers = numbers.map((n)=>n*2);
console.log(twoMulNumbers);
let sumInitial = 0;
numbers.forEach((singleNum,array)=>{
    console.log(array);
    sumInitial = sumInitial + singleNum;
});
console.log(sumInitial);
/*
Sumarry:
Map Method:Map method used a callback function as 
a parameter and take every element of the array.Map
method returns a new array that does not affect the 
orginal array.
Filter:Fiter method returns a new after filtering with
some conditon.Filter method does not execute function
for empty element.Filter method does not affact the orginal
array.
Find: find method return the first element which
staisfied the condition.
*/
//Implementation of filter method:
const afterFilter = numbers.filter((n)=> n>60 && n<100);
console.log(`After used filter:${afterFilter}`);
// Implementation of find method
console.log(numbers.find((n)=>n>60));