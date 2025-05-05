// let array = [1,2,3,4,5,6,7]
// console.log(array);

// let array = [1,2, 'string', true, [1,2,3]]

//let grocery = ['apples', 'bread', 'eggs', 'strawberries', 'dishwasher', 'butter', 'milk', 'cheese', 'juices']

// console.log(grocery);

// console.log(grocery[6]);

// console.log(grocery.length);

//console.log(grocery.reverse());

//grocery.push('oranges') //adds an element at the end of an array

//grocery.pop() //removes the last element from the end of an array

// grocery.unshift('oranges') //adds an element at first of index

// grocery.shift() //removes the first element

//grocery.splice(3,4)

//console.log(grocery.slice(2,5));

// console.log(grocery.indexOf('bread'));

// grocery.sort()

// console.log(grocery);

//TASK
// make an array of fruits
// print fruit after sorting them alphabetically but descendingly.
// add blueberries aT FIRST index
// remove last element of array
// print index of butterflies
// print 5 elemts from 3rd index

// let fruits = ['apples', 'mango', 'banana', 'orange', 'grapes', 'strawberry', 'blueberry', 'pomegranate', 'pineapple', 'guava']

// fruits.sort()
// fruits.reverse()

// fruits.unshift('blueberries')
// fruits.pop()

// console.log(fruits.indexOf('blueberries'));

// console.log(fruits.splice(3,5));

// console.log(fruits);

//let fruits = ['apples', 'bread', 'eggs', 'strawberries', 'dishwasher', 'butter', 'milk', 'cheese', 'juices']

// for (let i = 0; i<fruits.length; i++){
//     console.log(`${fruits[i]} are available`);
// }

let number = [454, 87, 19, 55, 908, 479, 123, 63, 65, 784]
let sum = 0
    
number.forEach(element =>{
    sum+= element
})
console.log(sum);

//  for (let i = 0; i<number.length; i++){
//  sum += number[i];
// }
// console.log(`The sum of the array is ${sum}`);

// let fruits = ['apples', 'bread', 'eggs', 'strawberries', 'dishwasher', 'butter', 'milk', 'cheese', 'juices']

// fruits.forEach(element =>{
//     console.log(element);
    
// })