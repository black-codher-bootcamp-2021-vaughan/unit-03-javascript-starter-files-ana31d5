// ****************************************************TASK 1****************************************************

// const animals = ['cat', 'dog', 'mouse', 'elephant', 'lion', 'lepard' ]; 

// animals.pop();

// console.log(animals);




// // ****************************************************TASK 2****************************************************

// const names = ['emmanuel', 'shiree', 'ana', 'baggy', 'uba', 'nelson','michael', 'rihanna', 'toby', 'winter', 'ruby' ];

// names.sort();

// names.sort().reverse();

// console.log(names);


// const numbers = [ 5 , 325 , 67, 100000, 150 ];

// numbers.sort();

// numbers.sort().reverse();

// numbers.sort(function(a,b){
//   return a-b;

// })  
// // to order the number descending order 

// console.log(numbers);




// ****************************************************TASK 3****************************************************

// Notice the backticks enclosing t'challa. Read https://www.javascripttutorial.net/es6/javascript-template-literals/ for an explanation on template literals
const people = [
  { name: `t'challa`, age: 37 },
  { name: 'shuri', age: 16 },
  { name: 'killmonger', age: 32 },

];

// const NoAge = people.filter((peopleName) => !peopleName.inludes('age'))



// // This is a helper function that should be used in the final task of the session.
// // You should pass this function to the sort method to sort the ages of each individiual in the people array of objects
// // Note: this helper function is using a tertiary operator instead of an if/else statement

function compare(a, b) {
  const personA = a.age;
  const personB = b.age;
  
  return personA > personB ? true : false;

}

// people.sort(compare);
// console.log(people);

// function orderNamesForLoop() {
//   names = [];
//   for (let index = 0; index < people.length; index++) {
//     const person = people[index].name;
//     names.push(person); 
//   };

//   return names;

// }

// console.log('for loop',orderNamesForLoop());


function orderNamesMap () {
  return people
  .sort(compare)
  .map(( person ) => people.name)

}

console.log('for loop', orderNamesMap());