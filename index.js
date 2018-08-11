function shout(string) {
  return 
  string.toUpperCase()
}

function whisper(string) {
  return 
  string.toLowerCase()
}

var uppercase = "HELLO!"

uppercase.toUpperCase() === uppercase

var lowercase = 'hello!'

lowercase.toLowerCase() === lowercase

var mixedCase = 'Hi there!'

mixedCase.toLowerCase() === mixedCase

mixedCase.toUpperCase() === mixedCase

function logShout(string) {
  console.log('HELLO')
}
function logWhisper(string) {
  console.log('hello')
}
var string = "I can't hear you!"

function sayHiToGrandma(string) {
  return sayHiToGrandma(string)
}