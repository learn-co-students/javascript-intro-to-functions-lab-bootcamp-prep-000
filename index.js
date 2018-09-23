function shout(string) {
  return string.toUpperCase()
}
function logShout(string) {
  console.log('HELLO')
}

function whisper(string) {
  return string.toLowerCase()
}

function logWhisper(string) {
  console.log('hello')
}


function sayHiToGrandma(string) {
if (string === "I love you, Grandma.") {
  return("I love you, too.")
} else if (string === string.toUpperCase()) {
  return("YES INDEED!")
} else if (string === string.toLowerCase()) {
    return("I can't hear you!")
 }
}

var uppercase = "Hello!"

uppercase.toUpperCase() === uppercase

var lowercase = 'hello!'

lowercase.toLowerCase() === lowercase

var mixedCase = 'Hi there!'

mixedCase.toLowerCase() === mixedCase

mixedCase.toUpperCase() === mixedCase