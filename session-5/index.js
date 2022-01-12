// TASK 1


function getGrade (total) {
    switch (true) 
    {
case total > 90:
    console.log("You get an A*");

break;

case total > 80 && total <= 90 :
    console.log("You get an A");

break;

case total > 70 && total <= 80 :
    console.log("You get a B");
 

break;

case total > 60 && total <= 70 :
    console.log("You get a C");


break;

case total > 50 && total <= 60 :
    console.log("You get a D");


break;

case total > 40 && total <= 50 :
    console.log("You get a E");



break;

case total > 30 && total <= 40 :
    console.log("You get a F");



break;

case total >20 && total <= 30:
    console.log("FAIL");



default :
    console.log("Unmarkable");

    }
    
}

console.log(getGrade(1)); //console log answer unmarkable 


