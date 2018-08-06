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

function sayHiToGrandma(string) {
  if ((string) === whisper(string)) {
    return 'I can\'t hear you!'
  } else if ((string) === shout(string)) {
      return 'YES INDEED!'
  } else if ((string) === "I love you, Grandma.") {
    return "I love you, too."
  }
}

var uppercase = "HELLO!"
uppercase.toUpperCase() === uppercase //True

function whisper(string) {
  return string.toLowerCase()
}
var lowercase = "hello!"
lowercase.toLowerCase() === lowercase //True

var mixedCase = 'Hi there!'
mixedCase.toLowerCase() === mixedCase //False
mixedCase.toUpperCase() === mixedCase //False
