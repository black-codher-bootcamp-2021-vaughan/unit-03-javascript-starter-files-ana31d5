// TASK 1


function getGrade (total) {
if (total > 90) {
    console.log("You get an A*");
}

if (total > 80, total <= 90){
    console.log("You get an A");
}

if (total > 70, total <= 80) {
    console.log("You get a B");
} 

if (total > 60, total <= 70 ) {
    console.log("You get a C");
}

if (total > 50, total <= 60) {
    console.log("You get a D");

}

if (total > 40, total <= 50) {
    console.log("You get a E");

}

if (total > 30, total <= 40) {
    console.log("You get a F");

}

if (total <30) {
    console.log("FAIL");

}
}

console.log(getGrade(92));


