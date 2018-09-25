
var uppercase = "HELLO"
uppercase.toUpperCase() === uppercase

var lowercase = 'hello'
lowercase.toLowerCase() === lowercase

var mixedCase = 'Hi there!'

mixedCase.toLowerCase() === mixedCase

mixedCase.toUpperCase()=== mixedCase


function shout(string) {
 return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(`${string.toUpperCase()}`)
}

function logWhisper(string) {
  console.log(`${string.toLowerCase()}`)
}


function sayHiToGrandma(string) {
  if (string === lowercase) {
    console.log("I can't hear you!")
  return "I can't hear you!"
  }
  else if (string === uppercase) {
    console.log("YES INDEED!")
    return "YES INDEED!"
  }
  else if (string === "I love you, Grandma.") {
    console.log("I love you, too")
    return "I love you, too."
  }
  else {
    return string
  }
  
}