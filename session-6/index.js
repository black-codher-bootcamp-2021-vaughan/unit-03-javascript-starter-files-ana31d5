// Use this randomNumber inside of the while/for loops to generate a random number


// ****************************************************TASK 1****************************************************

let counter= 1;

while (counter <=10) {
    counter++;
    const randomNumber = Math.round(Math.random() * 10);
}

console.log( 'Total random number ' + randomNumber);

// ****************************************************TASK 2****************************************************

for (counter = 1; counter <= 10; counter++) {
    const randomNumber = Math.round(Math.random() * 10);
}

console.log(randomNumber);









