var uppercase = "HELLO!"
uppercase.toUpperCase() === uppercase

var lowercase = "hello!"
lowercase.toLowerCase === lowercase

var mixedCase = "Hello there!"
mixedCase.toLowerCase() === mixedCase
mixedCase.toUppercase() === mixedCase

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

function sayHiToGrandma(sting) {
  if (string.toLowerCase()) return "I can't hear you!"
}