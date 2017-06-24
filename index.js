var uppercase = "HELLO!"

uppercase.toUpperCase() === uppercase

var lowercase = 'hello!'

lowercase.toLowerCase() === lowercase

var mixedCase = 'Hi there!'

mixedCase.toLowerCase() === mixedCase

mixedCase.toUpperCase() === mixedCase

function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  console.log('HELLO'); string.toUpperCase()
}
function logWhisper(string) {
  console.log('hello'); string.toLowerCase()
}
function sayHiToGrandma(string){
  if (string === string.toLowerCase()) {
    return("I cant hear you!")
}  if (string === string.toUpperCase()) {
    return("YES INDEED!")
}  if (string === "I love you, Grandma.") {
    return("I love you, too.")
  }
}
