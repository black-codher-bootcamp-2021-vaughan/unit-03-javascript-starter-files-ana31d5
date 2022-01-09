// ****************************************************TASK 1 - OBJECTS****************************************************

let personA = {
    name: 'Alissa',
    likes: 'PS4',
    location: 'France',
    age: '36'
};

let personB = {
    name: 'Trey',
    likes: 'sleeping',
    location: 'Mars',
    age: '70'
};

let personC = {
    name: 'Chicken',
    likes: 'feet',
    location: 'farm',
    age: '0'
};

let personD = {
    name: 'Apple',
    likes: 'money',
    location: 'China',
    age: '200'
}; 

function biography(person) {
    return person.name + ' is ' + person.age + ' years old. They live in ' + person.location + ' and they like ' + person.likes; 

};

console.log(biography(personA));
console.log(biography(personB));
console.log(biography(personC));
console.log(biography(personD))

// ****************************************************TASK 2 - MATHS OPERATORS****************************************************
// ***Uncomment the code below to begin the task***

const x = 100;
const y = 50;

const addition = x + y;

console.log("addition: x + y " + addition);

const subtraction = x - y;

console.log("subtraction: x - y " + subtraction);

const multiplication = x * y;

console.log("multiplication: x * y " + multiplication);

const division = x * y;

console.log("division: x + y " + division);


console.log("multiplication: x * x " + multiplication);


console.log("addition: x + x + y " + addition);


console.log("multiplication, division: (x * y) / x " + multiplication, division)  

const modulus = x % y;

console.log("remainder: x % y =" + modulus) ;

// ****************************************************TASK 3****************************************************


const myAge = 21;
const drivingAge = 18;

const IsdrivingAge = myAge > drivingAge;

console.log('Im I old enough to drive?' + IsdrivingAge)


// ****************************************************HOMEWORK****************************************************


function calculator(numberA, numberB) {
    let result = numberA + numberB
    result = numberA + numberB
    result = numberA * numberB
    result = numberA / numberB
    return result
}

 console.log(calculator(3,11));

 const PersonX = {
     name: 'Lucy',
     age : 100,
 }

 const PersonY = {
     name: 'Chichi',
     age : 2,
 }

 function WhoIsOlder(x,y) {
     const personXisOlder = x.age > y.age;
     const resultPersonXisOlder = x.name + "is older than " + y.name + " by " + (x.age - y.age) + "years";
     const resultPersonYisOlder = y.name + "is older than " + x.name + " by " + (y.age - x.age) + "years";
     if (personXisOlder === true) return resultPersonXisOlder;
     return resultPersonYisOlder;
 }

console.log(WhoIsOlder (PersonX, PersonY));

// homework






