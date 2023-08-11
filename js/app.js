"use strict";

let userScore=0;

let hello = prompt("Hello, what should I call you?");

alert(
  "Hi" +
    ", " +
    hello +
    "! " +
    "welcome to my world. Let's play a guessing game!"
);

let mySon = prompt("Do I have a daughter?");
mySon = mySon.toUpperCase();

if (mySon === "N" || mySon === "NO") {
  //console.log("mySon: ", mySon);
  alert("You're right! I have a son!");
} else {
  //console.log("mySon: ", mySon)
  alert("Incorrect! I do not have a daughter. I have a son.");
}

let ariArt = prompt("Does Ari like art?");
ariArt = ariArt.toUpperCase(); // yes -->>> YES

if (ariArt === "Y" || ariArt === "YES") {
  // console.log("ariArt: ", ariArt);
  alert("Yes! I am an amazing artist.");
} else {
  // console.log("ariArt: ", ariArt);
  alert("Wrong! I am in fact an artist");
}

let homeTown = prompt("Am I from New Orleans?");
mySon = mySon.toUpperCase();

if (homeTown === "Y" || "YES") {
  //console.log("homeTown:", homeTown);
  alert("Yes! From the land of crawfish!");
} else {
  //console.log("homeTown:", homeTown);
  alert("Wrong! She is from New Orleans");
}

let enjoycode = prompt("Am I enjoying coding?");
enjoycode = enjoycode.toUpperCase;

if (enjoycode === "Y" || "YES") {
  //console.log("enjoycode:", enjoycode);
  alert("HTML YES I AM! although this part is a little challenge :)!");
} else {
  //console.log("enjoycode:", enjoycode);
  alert("Unfortunately you're wrong, she is enjoying it very much!");
}

let mySchool = prompt("Did I graduate from Jackson State?");
mySchool = mySchool.toUpperCase;

if (mySchool === "Y" || "YES") {
  //console.log("mySchool: ", mySchool);
  alert("Thee I love!");
} else {
  //console.log("mySchool: ", mySchool);
  alert(":(");
}



let correctAnswer = 10;
let userGuess;

while (correctAnswer !== userGuess) {
  userGuess = prompt("How old is my dog? Guess a number between 1 and 10");
  userGuess = parseInt(userGuess);

  if (userGuess < correctAnswer) {
    alert("Too low!");
  } else if (userGuess > correctAnswer) {
    alert("Too high.");
  } else if (userGuess === correctAnswer) {
    alert("That's right! The answer was " + correctAnswer);
    userScore++;
  }
}

let motiArray = [
  "son",
  "family",
  "personal growth",
  "money",
  "helping others",
  "future",
  "freedom",
  "travel",
];

let attempts = 6;

hasAttempts: while (attempts !== 0) {
  attempts--;
  userGuess = prompt("Guess 1 of my motivations!");

  for (let i = 0; i < motiArray.length; i++) {
    if (userGuess === motiArray[i]) {
      alert("Yep! " + motiArray[i] + " is on the list.");
      break hasAttempts;
    }
}
alert("Wrong, Try again! You have " + attempts + " attempts left.");
}


if (!attempts) {
  alert(
    "You're out of attempts. The correct answers are: " + motiArray.toString()
  );
}

{
  alert(" Your score is " + userScore);
}

