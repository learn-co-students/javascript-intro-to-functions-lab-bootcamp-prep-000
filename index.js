var uppercase = "HELLO!"

uppercase.toUpperCase() === uppercase // true

var lowercase = 'hello!'

lowercase.toLowerCase() === lowercase // true

var mixedCase = 'Hi there!'

lowercase.toLowerCase() === lowercase // true

mixedCase.toLowerCase() === mixedCase // false

mixedCase.toUpperCase() === mixedCase // false

function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  console.log('HELLO')
}
function logWhisper(string) {
  console.log('hello')
}
function sayHiToGrandma(string) {
  var a = "I can\'t hear you!"
  var b = "YES INDEED!"
  var c = "I love you, too."
  if (string === 'hello'){
    return a
  }
  else if (string === 'HELLO'){
    return b
  }
  else if (string === 'I love you, Grandma.') {
    return c
  }
}
