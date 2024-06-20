var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

// Detect when a keyboard key has been pressed
$(document).keydown(function () {
  if (!started) {
    // Change h1 title to "Level 0"
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});


  $(".btn").click(function () {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);

    // Log the userClickedPattern to the console
    console.log(userClickedPattern);
  });

function nextSequence() {
  userClickedPattern = []; // Reset userClickedPattern at the start of each level

  level++;
  // Update the h1 with this change in the value of level
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColour);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

// Detect when any button is clicked and trigger a handler function

//nextSequence();
