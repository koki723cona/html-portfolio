
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

/*function bmiCalculator(weight, height) {
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
*/

/*
function isLeap(year) {
  if ((year % 4 === 0 && year % 100 !==0) || year % 400 === 0) {
    return "Leap year."; //leap year
}  else {
    return "Not leap year."; //Not a leap year
}
}


console.log(isLeap(2400));
console.log(isLeap(1989));
*/

/*
var guestList = ["Angela", "Koki", "Natsumi", "Cona"];
var guestName = prompt("what is your name?");

if (guestList.includes(guestName)) {
  alert("welcome");
} else {
  alert("Sorry, next time");
}
*/

/*
var output = [];
var count = 1;
function fizzBuzz() {
   if (count % 3 === 0 && count % 5 === 0){
    output.push("FizzBuzz");
  }
    else if (count % 3 === 0) {
    output.push("Fizz"); 
  } else if (count % 5 === 0) {
    output.push("Buzz"); 
  } else {
    output.push(count);
  }
  count++;
  console.log(output);
}


fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
*/

function whoBuysLunch(names) {
    // Get the length of the names array
    var numberOfPeople = names.length;
    
    // Generate a random index between 0 and numNames - 1
    var randomPersonPositon = Math.floor(Math.random() * numberOfPeople);
    
    // Select the random name from the array
    var selectedName = names[randomPersonPositon];
    
    // Construct the output string
    return selectedName + " is going to buy lunch today!";
    
}

// Example usage:
var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
var result = whoBuysLunch(names);
console.log(result); // Output will be similar to "Michael is going to buy lunch today!"
