
/*
var name = prompt("what is your name?");
var firstChar = name.slice(0, 1);
var upperCasefirstChar = firstChar.toUpperCase();
var restOfName = name.slice(1, name.length);
restOfName = restOfName.toLowerCase();
var capitalisedName = upperCasefirstChar + restOfName;
alert("Hello, " + capitalisedName); 
*/
/*
var dogAge = prompt("how old is your dog?");
var humanAge = (dogAge - 2) * 4 + 21;
alert("Your dog is " + humanAge + " years old in human years.");
*/

/*
function lifeInWeeks(age) {
  /************Don't change the code above************/
  //Write your code here.
  /*
  var yearRemaining = 90 - age;
  var days = yearRemaining * 365;
  var weeks = yearRemaining * 52;
  var months = yearRemaining * 12;

  console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.");
  

  /*************Don't change the code below**********/
//}

/*function bmiCalculator(weight, height) {
  var bmi = weight / (height * height);
  return Math.round(bmi);
};

var bmi = bmiCalculator(65, 1.8);

console.log(bmi);
*/

/*
var n = Math.random();
n = Math.floor(n * 6) + 1;
console.log(n);
*/
/*
prompt("what is your name?");
prompt("what is your favorite person name?");
var n = Math.random();
n = Math.floor(n * 100) + 1;
alert(n + " %")
*/

function bmiCalculator(weight, height) {
    var bmi = weight / (height * height);
    bmi = Math.round(bmi);

    if (bmi < 18.5) {
        return "Your BMI is " + bmi + ", so you are underweight.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "Your BMI is " + bmi + ", so you have a normal weight.";
    } else {
        return "Your BMI is " + bmi + ", so you are overweight.";
    }
}

// Example usage:
console.log(bmiCalculator(70, 1.75)); // Output will depend on the input values
