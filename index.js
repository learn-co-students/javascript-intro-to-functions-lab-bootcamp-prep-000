function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

var uppercase = "HELLO!";
var lowercase = 'hello!';

function logShout(string) {
  console.log(string.toUpperCase());
  string.toUpperCase() === uppercase; // true
}

function logWhisper(string) {
  console.log(string.toLowerCase());
  string.toLowerCase() === lowercase;  // true
}

function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) {
    return "I can't hear you!";
  }
   if (string.toUpperCase() === string) {
    return "YES INDEED!";
  }
   if (string === "I love you, Grandma.") {
    return "I love you, too."; 
  }
}