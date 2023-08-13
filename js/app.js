"use strict";
let userScore=0;

function username(){
  let hello = prompt("Hello, what should I call you?");
  
  alert(
    "Hi" +
    ", " +
    hello +
    "! " +
    "welcome to my world. Let's play a guessing game!"
    );
}

username();

function family(){
    
let mySon = prompt("Do I have a daughter?");
mySon = mySon.toUpperCase();

if (mySon === "N" || mySon === "NO") {
  //console.log("mySon: ", mySon);
  alert("You're right! I have a son!");
} else {
  //console.log("mySon: ", mySon)
  alert("Incorrect! I do not have a daughter. I have a son.");
}

}

//calling the function family that was blocked out above

family();

//prompt asking user if the developer ari likes art

function art(){

let ariArt = prompt("Does Ari like art?");
ariArt = ariArt.toUpperCase(); // yes -->>> YES

if (ariArt === "Y" || ariArt === "YES") {
  // console.log("ariArt: ", ariArt);
  alert("Yes! I am an amazing artist."); 
  } 
else {
  // console.log("ariArt: ", ariArt);
  alert("Wrong! I am in fact an artist");
  }
}

//calling the art function

art();

function home(){

let homeTown = prompt("Am I from New Orleans?");
homeTown = homeTown.toUpperCase();

if (homeTown === "Y" || "YES") {
  //console.log("homeTown:", homeTown);
  alert("Yes! From the land of crawfish!");
}
 else {
  //console.log("homeTown:", homeTown);
  alert("Wrong! She is from New Orleans");
  }

}

//calling home function

home();

function coding(){


let enjoycode = prompt("Am I enjoying coding?");
enjoycode = enjoycode.toUpperCase;

if (enjoycode === "Y" || "YES") {
  //console.log("enjoycode:", enjoycode);
  alert("HTML YES I AM! although this part is a little challenging :)!");
}
 else {
  //console.log("enjoycode:", enjoycode);
  alert("Unfortunately you're wrong, she is enjoying it very much!");
  }

}

console.log("Code made it here");
//calling the coding function

coding();

function school(){

let mySchool = prompt("Did I graduate from Jackson State?");
mySchool = mySchool.toUpperCase;

if (mySchool === "Y" || "YES") {
  //console.log("mySchool: ", mySchool);
  alert("Thee I love!");
  userScore++;
} 
else {
  //console.log("mySchool: ", mySchool);
  alert(":(");
  userScore--;
  }

}

//calling school function

school();

let userGuess;
let correctAnswer = 10;
function guessingGame(){




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

}


guessingGame();

console.log("code reached guessing game");

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

