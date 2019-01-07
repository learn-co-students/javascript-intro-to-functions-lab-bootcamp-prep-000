/*
var uppercase = "HELLO!"

uppercase.toUpperCase() === uppercase

var lowercase = 'hello!'

lowercase.toLowerCase() === lowercase

var mixedCase = 'Hi there!'

mixedCase.toLowerCase() === mixedCase

mixedCase.toUpperCase() === mixedCase
*/

function shout (string){
  return string.toUpperCase()
}

function whisper (string) {
  return string.toLowerCase()
}


function logShout ()


function sayHiToGrandma (string) {
  if (string === string.toLowerCase()) {
    return ("I can\'t hear you!")
  }
  if (string === string.toUpperCase()){
    return ("YES INDEED!")
  }
  else {
   //(string === "I love you, Grandma.") {
    return ("I love you, too.")
    }
  }
}
