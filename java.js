////--Number Comparison:

///Create an if/else if statement that compares the given variables. 
//Compare myNumber against num1. Based on which condition evaluates to true,
// print the following messages using console.log():
///num1 + " is smaller than my number, " + myNumber
//num1 + " is larger than my number, " + myNumber
///num1 + " is equal to my number, " + myNumber
    
var num1= 7;
var myNumber= 7;
if (num1 < myNumber){
    console.log(num1 + " is smaller than my number, " + myNumber)
 }   else if( num1 > myNumber){
     console.log(num1 + " is larger than my number, " + myNumber )
    } if( num1 == myNumber){
         console.log(num1 + " is equal to my number, " + myNumber)
     }
 
/**What will print to the console?
var num1 = 37;

if (num1) {
   console.log("Parakeet");
} else {
   console.log("Parrot");
} .
"Parakeet"

Why this option is correct:
In this case, the if statement is checking to see if the num1 variable contains a value. It does, therefore it is truthy and thus evaluates as true.

Did you like this question?

*/

   var num1 =37;
   if(num1) {
    console.log("Parakeet");
   }else {
    console.log("parrot");
   }

 /**Print the Larger Number:
 num2
Write an if/else if statement that prints the larger of the two given inputs, 
num1 and num2. If they are the equal, using console.log() print "num1 is equal to num2". */
var num1 = 2;
var num2 = 3;
if (num1 < num2){
    console.log(num2)
 }   else if( num1 > num2){
     console.log(num1)
    } if( num1 == num2){
         console.log("num1 is equal to num2")
     }


     var num1 = 25;
 var num2 = 18;

 if (num1 == num2){
          console.log("A");
 } else if (num1 > num2){ 
          console.log("B");
 } else {
          console.log("C");
 }

/** Nested Statements:

Create a nested if statement (the second if statement will only run if the first one evaluates to true) that does the following:
The first if statement will check to see if num1 is greater than or equal to num2 .
If the first if statement evaluates to true, then check to see if num3 is greater than or equal to num4.
If both conditions are true, print: "Both statements are true."
If the first condition is true but the second is false, print: "The first statement is true, but the second is not."
In all cases, after the outer if statement, print "Program ended." to the console.*/

var num1 = 1
var num2 = 2
var num3 = 3
var num4 = 4

if (num1 >= num2 ){
    console.log()
}






var a = 100;
var b = 200;
var c = 300;
console.log(a >= b || a <= c);

let x = 45;
let y = 65;
let z = 75;
console.log(x + y > z);

var myGrade= 90 ;
var passingGrade = 70;
console.log(myGrade >= passingGrade);
console.log(myGrade >=90);

var num1 = 16;
var num2 = 25;        
var num3 = 48;

console.log(num1 >= num2 && num3 > num2);


let age = 21;
 let isAdult = false;

 if (age >= 13) {
     if (age >= 65) {
        isAdult = true;
        console.log("You pay the Senior Citizen price of $25!");
     } else {
        isAdult = true;
        console.log("You pay the full ticket price of $35!");
     }
 } else {
    console.log("You pay the Child ticket price of $15!");
 }

 
let temperature = 77;
let weatherCondition = "cloudy";

if (temperature > 86) {
   console.log("It's too hot outside!");
} else {
    if (weatherCondition === "sunny") {
      console.log("It's a nice day outside!");
    } else if (weatherCondition === "cloudy") {
       console.log("It's a bit gloomy outside.");
    } else {
       console.log("I'm not sure what the weather is like.");
    }
}


/** Switch Statement */
var fruit = "Apples"; 
    var answer;

    switch (fruit) {
       case "Apples":
          console.log("Apples are $0.65 a pound.");
          break;
       case "Grapes":
          console.log("Bananas are $2.75 a pound.");
          break;
       case "Oranges":
       case "Grapefruits":
          console.log("Oranges and Grapefruits are $.80 a pound.");
          break;
       default:
          console.log("Sorry, we are out of that fruit.");
    }

    console.log("Is there anything else you would like?");

    var1 = 0;
    var2 =1;
    console.log(var1 != var2);

    var bornAfter = 1980;
    var bornBefore = 1997;
    var birthYear = 1992;
   
    if(bornBefore > birthYear && bornAfter < birthYear){
       console.log("You are a Millenial!");
    }

    for (let i = 0; i < 5; i++) {
        console.log(i);
     }
     let = 0;
     while (i < 5) {
        console.log(i);
        i++;
     }
 
     let i = 0;
    do {
       console.log(i);
       i++;
    } while (i < 5);

    for (let i = 0; i < 3; i++) {
        console.log(i);
    }
    console.log("It's the final countdown!");


   
      //Create a function that has two or more parameters (inputs)
////Create a function that has two or more parameters (inputs)
//Use the parameters inside of the function in some way
///Invoke the function by passing arguments (inputs)///


const badInternet = (isInternetBad) => {
   if(isInternetBad){
       console.log("reset your wifi")
   } else {
       console.log("no need to reset your wifi")
                   }
}