/*
 সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর সেকেন্ড পজিশন এর উপাদান কে destructuring করে 'balance' নামক একটা ভেরিয়েবল এ রাখবে।
*/ 
const person = {
    Name:"Apurbo paul",
    id:193002133,
    age:23,
    location:{
        road:"Shapla sarani road",
        city:"Dhaka"
    }
}
//object desturctering
const {
    Name:name,
    id,
    age,
    location:{
        road,
        city
    }
} = person;
console.log(name,id,age,road,city);
const friendsName = ["Topu","Bappy","Jibon","Jaber","Jibon","Mashun","Robin"];
//Destructering array seccond position element into blance variable;
const {1:balance} = friendsName;
console.log(`Array secoond positin element is ${balance}.`);


//shorthand দিয়ে অবজেক্ট কিভাবে ডিক্লেয়ার করে, {a , b } স্টাইলে।
const carName = "Audi";
const weight = "2000kg";
const color = "Balck";
const car = {
    carName,
    weight,
    color
}
console.log(car);