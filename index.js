
function shout(string) {
 return string.toUpperCase()
}
function whisper(string) {
 return string.toLowerCase()
}
var uppercase = "HELLO!"

uppercase.toUpperCase() === uppercase//true

var lowercase = 'hello!'

lowercase.toLowerCase() === lowercase//true

varmixedCase = 'Hi there!'

mixedCase.toLowercase() === mixedCase//false

mixedCase.toUpperCase() === mixedCase//false

function logShout(string) {
  console.log(string.toUpperCase())
}
function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) {
    return "I cannot hear you"
  }
  if (string.toUpperCase() === string) {
      return "YES, hello sweetie!"
}
if (string ==="I love you to, Grandmama.") {
        return "I love you, too!"
}
