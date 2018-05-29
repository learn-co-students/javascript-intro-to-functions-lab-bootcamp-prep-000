<<<<<<< HEAD
function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  if (string === "I love you, Grandma.") {return "I love you, too.";  }
  else if (string === "HELLO") {return "YES INDEED!";}
  else if (string === "hello") {return "I can't hear you!"; }
  else {
    return ("arent you sweet")
  }
}
=======
function shout(string) {
  return string.toUpperCase()
}
var uppercase = "HELLO!"
 
uppercase.toUpperCase() === uppercase // true
 
var lowercase = 'hello!'
 
lowercase.toLowerCase() === lowercase // true
 
var mixedCase = 'Hi there!'
 
mixedCase.toLowerCase() === mixedCase // false
 
mixedCase.toUpperCase() === mixedCase // false

function whisper(string) {
  return string.toLowerCase()
}
function sayHelloToIsabel() {
	console.log("Hello, Isabel!")
}
>>>>>>> 1fde7070b6d1217254f7eee2c24ed4ba70a50baf
