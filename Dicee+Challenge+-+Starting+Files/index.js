/*var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 6) + 1;
//console.log(randomNumber1);

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - image/dice6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);
//console.log(randomImageSource);
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource);
*/

// 1つ目のダイスのランダムな数値を生成
var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 6) + 1;
var randomDiceImage1 = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png
var randomImageSource1 = "images/" + randomDiceImage1; // images/dice1.png - images/dice6.png

// 2つ目のダイスのランダムな数値を生成
var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2 * 6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png"; // dice1.png - dice6.png
var randomImageSource2 = "images/" + randomDiceImage2; // images/dice1.png - images/dice6.png

// 1つ目のダイス画像を設定
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);

// 2つ目のダイス画像を設定
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

var heading = document.querySelector("h1");

if(randomNumber1 > randomNumber2) {
  heading.innerHTML = "player 1 Wins!";
} else if(randomNumber1 < randomNumber2) {
  heading.innerHTML = "Player 2 Wins! ";
} else {
  heading.innerHTML = "Draw";
}