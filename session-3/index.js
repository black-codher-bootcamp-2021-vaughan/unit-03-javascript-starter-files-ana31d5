// This is a comment in JavaScript
// You can see where this file is connected to your HTML in the index.html on line 14

let a = 5;
const b = 10;
let c = a + b;

console.log(c);

a = 100;

console.log('After a has been updated' +c);

c = a + b;

console.log('After a has been updated with the new a value' +c);


// **********************TASK 2*********************************************************

function sayHey() {
    console.log("Hey!")
};

function conversation() { 
    sayHey();
    console.log("How are you?");
    console.log("Goodbye");
};
conversation();

function futureAge(name,ageIn5Years) {
    sayHey();
    console.log(name + " you will be " + ageIn5Years + " in 5 years") };
    futureAge("Mary", "22");
    futureAge("Chicken", "22");

