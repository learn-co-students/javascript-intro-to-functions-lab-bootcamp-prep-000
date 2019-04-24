var uppercase = ''
uppercase.toUpperCase() === uppercase

var lowercase = ''
lowercase.toLowerCase() === lowercase

var mixedCase = 'Hi there!'
mixedCase.toLowerCase() === mixedCase
mixedCase.toUpperCase() === mixedCase

var gma = "I love you, Grandma."

function shout(string){
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper (string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma (string) {
  if (string.toLowerCase() === string){
    return ("I can't hear you!")
  }
  else if (string.toUpperCase() === string) {
    return ("YES INDEED!")
  }
  else if (string === gma){
  return "I love you, too."
}
else {
  return
}
}
