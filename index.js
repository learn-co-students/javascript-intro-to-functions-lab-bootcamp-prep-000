var uppercase = "HELLO!"

uppercase.toUpperCase() === uppercase // true

var lowercase = 'hello!'

lowercase.toLowerCase() === lowercase // true

var mixedCase = 'Hi there!'

mixedCase.toLowerCase() === mixedCase // false

mixedCase.toUpperCase() === mixedCase // false

var loveYou = "I love you, Grandma."


function shout(string) {
  return "Hello".toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  console.log(string.toUpperCase())
}
function logWhisper(string){
  console.log(string.toLowerCase())
}
function sayHiToGrandma(string) {
  if(string === string.toLowerCase()) {
    return "I can\'t hear you!"
  }
  else if (string === string.toUpperCase()) {
    return "YES INDEED!"
  }
  else if (string === loveYou) {
    return "I love you, too."
  }
}
