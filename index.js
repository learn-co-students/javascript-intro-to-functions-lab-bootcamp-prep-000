var uppercase = "HELLO!"

uppercase.toUpperCase() === uppercase // true

var lowercase = 'hello!'

lowercase.toLowerCase() === lowercase // true

var mixedCase = 'Hi there!'

mixedCase.toLowerCase() === mixedCase // false

mixedCase.toUpperCase() === mixedCase // false


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

function sayHiToGrandma(string) {if (string === 'hello') return "I can't hear you!"
  else if (string === 'HELLO') return "YES INDEED!"
  else return "I love you, too."
}
