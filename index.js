var uppercase = "HELLO!"
var lowercase = 'hello!'
var mixedCase = 'Hi there!'

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
  if (string === "hello") {
    return ("I can't hear you!")
  }
  if (string === "HELLO") {
    return ("YES INDEED!")
  }
  if (string === "I love you, Grandma.") {
    return ("I love you, too.")
  }
}
