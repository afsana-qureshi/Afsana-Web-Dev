let x = 7
x = x+5

x+=5 //x=x+5 (assignment operator)
x-=2
x*=6

//let quantity = 0
//quantity +=1

//Ternary Operators
//let variable = condition ? expression(true) : expression(false)

//write a program that tells whether you can drive or not on the basis of your age

let age = 25
let can_drive = age >18 ?  'Can drive' : 'cannot drive'
console.log(can_drive);

//Write a program that tells the number is even or not
//number % 2 ==0
let number = 6
let result = number %2 ==0 ? 'even' : 'odd'
console.log(result);

a = 7
//logical operators
console.log(5>7);
console.log(5<7);
console.log(5==5);
console.log(5==2);
console.log(5=="5"); //linient comparison
console.log(5==="5"); //strict comparison
console.log(5>=5);

//2+2 = 4 #addition
//2+2 = 22 #string concatenation
console.log(2+2);
console.log(2+"2");

let firstName = "Afsana"
let lastName = "Noreen"
console.log(firstName+lastName);

//Task
let first_name = 'Afsana'
let last_name = 'Qureshi'
let myage = '19'
console.log(`My name is ${first_name+last_name} and I am ${myage} years old`);

let marks = 51
let marksResult = marks >=50 ? 'Pass' : 'Fail'
console.log(marksResult);

let lenght = 12
let width = 5
let area= lenght*width
console.log(`The area of recatangle is ${area}`)

let score = "50abc"
score = 50
console.log(`The data type of score is ${typeof score}`);

let userID = 'afs123'
let username = 'afsana'
let email = 'afs@gmail.com'
let isVerified = true
console.table({userID, username, email, isVerified});

let statement = 'My name is Afsana and the age is 19'

//Lenght 
console.log(`The lenght of variable is ${statement.length}`); //lenght starts from 1

//SubString
console.log(statement.substr(2,7)); //position starts from 0 //position to lenght
console.log(statement.substring(2,7)); //position to position

//Index-Position
console.log(statement.indexOf('is')); 
console.log(statement.lastIndexOf('is'));
console.log(statement.toLowerCase());
console.log(statement.toUpperCase());

//Replace
statement = statement.replace('Afsana', 'Noreen')
console.log(statement);