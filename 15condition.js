 //Conditon Statements
 if (5<3) {
   console.log('Hello World');
 }

 else{
    console.log('Hello!');
 }

 let number=90
 console.log(number%2);
 
 if (number%2==0){
    console.log('Even number');
 }

 else{
    console.log('Odd number');
 }

 //Write a program that gives a message of 'weather is pleasant' only when the temperature is lesser than or equal to 25, Print 'Weather is hot' when temperature is greater than 25 and less than 40  else print "weather is hot"

 let temp = 24
 let isRaining = true
 let message = '' //empty string
 if (temp<= 25) {
    message = 'Weather is pleasant'
 }

 else if (temp >25 && temp<=40){
    message = 'Weather is hot'
 }
 else{
   message = "weather is unbearable"
 }
 console.log(message);

 let marks = 90
 let grade= ''
 if (marks<=100 && marks>=90) {
   grade='Grade A*'
 }
 
 else if (marks<90 && marks>79) {
   grade= 'Grade A'
 }

 else if (marks<=79 && marks>69) {
   grade= 'Grade B'
 }

 else if (marks<=69 && marks>=59) {
   grade= 'Grade C'
 }

 else if (marks<50)
   grade= "Try_Again"

 console.log(grade);
 