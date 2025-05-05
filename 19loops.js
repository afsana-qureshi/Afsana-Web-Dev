console.log("My name is Afsana");
// console.log("My name is Afsana");
// console.log("My name is Afsana");
// console.log("My name is Afsana");
// console.log("My name is Afsana");

// for (variable assignment; CSSConditionRule; increment/decrement){
//     for block
// }
for (let i = 0; i<3; i++){
    console.log(i);
    
}

for (let i = 0; i<5; i++){
    console.log("My name is Afsana");
}

for (let i = 0; i<21; i+=2){
    console.log(i);
}

for (let i = 1; i<20; i+=2){
    console.log(i);
}

for (let i = 10; i>=0; i--){
    console.log(i);
}

for (let i = 4; i<41; i+=4){
    console.log(i);
}

for (let i = 1; i<11; i++){ 
    console.log(`4 x ${i} = ${4*i}`);
}

// for (let i = 1; i<3; i++){
// console.log(`1 x ${i} = ${1*i}`);
// }
//while (condition){
// while block
// }

let i = 0 //global scope variable
while (i<10){
console.log(i);
i++
}

let j = 1
do {
    console.log("Hello World")
    j++
} while (j<=10);

//TASK
//Write a program that prints factorial of a number
//5! = 1x2x3x4x5
// fact = 1x1=1
// fact = 1x2=2
// fact = 2x3=6
// fact = 6x4=24
// fact = 24x5=120
// fact = 120

let number = 5
let fact = 1
for (let i = 1; i<=number; i++){
    fact *= i //fact = fact*i
}
console.log(`Factorial of ${number} is ${fact}`);

let car = {
    model : "2010",
    brand : "Toyota",
    owner : {
        name : "Sufyan",
        age : 60,
        licenseNumber : 567568,
    }
}
for (const key in car){
    const element = car [key];
    console.log(`The ${key} is ${element}`);
    
}

for (const key in car.owner){
    const element = car.owner[key];
    console.log(`The ${key} is ${element}`);
}
//console.log(car['brand']);
