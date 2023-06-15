const person = {
    Name:"Apurbo paul",
    age:23,
    id:193002133,
    location:{
        road:"Sapla sarani road",
        city:"Dhaka"
    }
}
console.log(JSON.stringify(person));
console.log(JSON.parse(JSON.stringify(person)));