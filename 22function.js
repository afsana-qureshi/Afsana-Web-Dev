// function printText() {
//     //function block
//     console.log("Hello World");
//     console.log("Hello");
// }
// printText()

// function printName(name){
//     console.log(`My name is ${name}`);
    
// }
// printName("john")

// function addNumbers (num1, num2){
//     // let sum = num1 + num2
//      return num1+num2
// }
// // console.log(addNumbers(5,8));

// let a = addNumbers(4,6)
// console.log(a);

function login(username){
    if  (username == undefined){
        console.log('Please enter your username');
        return
    }
    console.log(`Hello ${username}, Welcome to the Dashboard`);
}
login();
