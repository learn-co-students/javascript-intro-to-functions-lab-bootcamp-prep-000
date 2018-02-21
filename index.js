function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log("HELLO")
}

function logWhisper(string) {
  console.log("hello")
}

var uppercase = "HELLO!"

uppercase.toUpperCase() === uppercase // true

var lowercase = 'hello!'

lowercase.toLowerCase() === lowercase // true

var mixedCase = 'Hi there!'

mixedCase.toLowerCase() === mixedCase // false

mixedCase.toUpperCase() === mixedCase // false

function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) {
    return 'I can\'t hear you!'
  }
  else if (string.toUpperCase() === string) {
    return 'YES INDEED!'
  }
  else if ('I love you, Grandma.' === string) {
    return 'I love you, too.'
  }
}
