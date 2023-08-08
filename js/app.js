'use strict'

let hello= prompt("Hello, what should I call you?");

alert ("Hi" + ", " + hello + "! "+ "welcome to my world. Let's play a guessing game!" );


let mySon= prompt("Do I have a daughter?")
mySon = mySon.toUpperCase();

if (mySon === "N" ||mySon === "NO") {
    //console.log("mySon: ", mySon);
    alert("You're right! I have a son!");
} else {
    //console.log("mySon: ", mySon)
    alert("Incorrect! I do not have a daughter. I have a son.")
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


let homeTown= prompt("Am I from New Orleans?") 
mySon= mySon.toUpperCase();

if (homeTown === "Y" || "YES") {
//console.log("homeTown:", homeTown); 
alert("Yes! From the land of crawfish!");

} else { 
    //console.log("homeTown:", homeTown); 
    alert("Wrong! She is from New Orleans")}


let enjoycode= prompt("Am I enjoying coding?")
enjoycode= enjoycode.toUpperCase

if(enjoycode === "Y" || "YES") {
//console.log("enjoycode:", enjoycode);
alert("HTML YES I AM! although this part is a little challenge :)!")
} else {
    //console.log("enjoycode:", enjoycode);
    alert("Unfortunately you're wrong, she is enjoying it very much!")
}

let mySchool= prompt("Did I graduate from Jackson State?") 
    mySchool= mySchool.toUpperCase 

 if(mySchool === "Y" || "YES") {
    //console.log("mySchool: ", mySchool);
 alert("Thee I love!");
 } else {
    //console.log("mySchool: ", mySchool);
alert(":(")
 }



