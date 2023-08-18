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
  userScore++;
} else {
  //console.log("mySon: ", mySon)
  alert("Incorrect! I do not have a daughter. I have a son.");
  userScore--;
}

}

//calling the function family that was blocked out above

family();

//prompt asking user if the developer ari likes art

function art(){

let ariArt = prompt("Do I like art?");
ariArt = ariArt.toUpperCase(); // yes -->>> YES

if (ariArt === "Y" || ariArt === "YES") {
  // console.log("ariArt: ", ariArt);
  alert("Yes! More like love!"); 
  userScore++;
  } 
else {
  // console.log("ariArt: ", ariArt);
  alert(":( wrong but it is not the end of the world lol");
  userScore--;
  }
}

//calling the art function

art();

function home(){

let homeTown = prompt("Am I from New Orleans?");
homeTown = homeTown.toUpperCase();

if (homeTown === "Y" || homeTown === "YES") {
  //console.log("homeTown:", homeTown);
  alert("Yes! From the land of crawfish and mardi gras!");
  userScore++;
}
 else {
  //console.log("homeTown:", homeTown);
  alert("Wrong! I am from New Orleans");
  userScore--;
  }

}

//calling home function

home();

function coding(){


let enjoycode = prompt("Am I enjoying coding?");
enjoycode = enjoycode.toUpperCase;

if (enjoycode === "Y" || enjoycode === "YES") {
  //console.log("enjoycode:", enjoycode);
  alert("HTML YES I AM! ;)!");
  userScore++;
}
 else {
  //console.log("enjoycode:", enjoycode);
  alert("Unfortunately you're wrong, I am enjoying it very much!");
  userScore--;
  }

}

console.log("Code made it here");
//calling the coding function

coding();

function school(){

let mySchool = prompt("Did I graduate from Jackson State?");
mySchool = mySchool.toUpperCase;

if (mySchool === "Y" || mySchool === "YES") {
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

//console.log("code reached guessing game");


function motivationGuess (){

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
}

motivationGuess();
