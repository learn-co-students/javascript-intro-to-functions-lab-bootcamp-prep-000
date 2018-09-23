global.expect = require('expect');
 
const babel = require('babel-core');
const jsdom = require('jsdom');
const path = require('path');

function shout (string) {
  string = String(string).toUpperCase();
  return string;
}

function whisper(string) {
  string = String(string).toLowerCase();
  return string;
}

function logShout(string) {
  string = String(string).toUpperCase();
  console.log(shout(string));
}

function logWhisper(string) {
  string = String(string).toLowerCase();
  console.log(whisper(string));
}

function sayHiToGrandma(string) {
 if (string === "I love you, Grandma.") {
   return "I love you, too.";
 } else if(string.toUpperCase() === string) {
   return "YES INDEED!";
 } else if (string.toLowerCase() === string) {
   return "I can\'t hear you!";
 } else {
   return "mixed capitalization";
 }
}

console.log(sayHiToGrandma("I love you, Grandma."));
console.log(sayHiToGrandma("mm"));
console.log(sayHiToGrandma("MM"));
console.log(sayHiToGrandma("Mm"));