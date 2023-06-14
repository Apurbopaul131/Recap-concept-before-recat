const person = {};
// optional chaining for accessing object properties.
const currentAddress = person.location?.address;
console.log(`Expected result undefined:${currentAddress}`);

function func(nameStr){
    return nameStr + "kobis";
}
// optional chaing for function call
const result = func?.("lobish");

/*
Advantage:
1.Optional chaining simplifies this expression.
2.Optional cahining also handles error.
3.Optional chaining is particularly useful when working with API data. If you're not sure whether an optional property exists, you can reach for optional chaining.
*/
class sum{
    constructor(num1,num2){
        this.num1 = num1;
        this.num2 = num2;
    }
    sumFunc(){
        const sum = this.num1 + this.num2;
        return sum; 
    }
}
function optionalSum(n1,n2){
    const sumTwo = n1 + n2;
    return sumTwo;
}

const obj1 = new sum(10,20);
const res = obj1?.sumFunc() ?? optionalSum(10,50);
console.log(res);
