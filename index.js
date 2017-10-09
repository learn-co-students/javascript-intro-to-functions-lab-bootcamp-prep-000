/*
var uppercase = "HELLO!"

uppercase.toUpperCase() === uppercase // true

var lowercase = 'hello!'

lowercase.toLowerCase() === lowercase // true

var mixedCase = 'Hi there!'

mixedCase.toLowerCase() === mixedCase // false

mixedCase.toUpperCase() === mixedCase // false
*/

function shout(string) {
  return string.toUpperCase()
}  //Returns string in all UPPERCASE

function whisper(string) {
  return string.toLowerCase()
}  //Returns string in all lowercase

function logShout(string) {
  console.log("HELLO")
}

function logWhisper(string) {
  console.log("hello")
}

function sayHiToGrandma(string) {
  return string.toLowerCase("Hello!")

function sayHiToGrandma(string) {
  return string.toUpperCase("Hello!")
}
