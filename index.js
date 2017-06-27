function shout(string) {
 return string .toUpperCase()
 }

function whisper(string) {
  return string .toLowerCase()
}

function logShout(string) {
  console.log ('HELLO')
}

function logWhisper(string) {
  console.log ('hello')
}

var lowercase = "hello!"
var uppercase = "HELLO"
var mixedcase = "I love you, Grandma."

function sayHiToGrandma(string) {}

if (string.toLowerCase() === lowercase) {
  return "I can't hear you!";
} else if (string.toUpperCase() === uppercase) {
  return "YES, INDEED!";
} else (string.toLowerCase() === mixedcase) {
  return "I love you, too";
}
