var uppercase = "HELLO!"

uppercase.toUpperCase() === uppercase

var lowercase = 'hello!'

lowercase.toLowerCase() === lowercase

var mixedCase = 'Hi there!'

mixedCase.toLowerCase() === mixedCase

mixedCase.toUpperCase() === mixedCase

function shout(string) {
  return string.toUpperCase
}

function whisper(string) {
  return string.toLowerCase
}

function logshout(string) {
  console.log ("string.toUpperCase")
}

function logwhisper(string) {
  console.log ("string.toLowerCase")
}

function sayHiToGrandma(string) {
  if (string.lowercase) {
  return "I can't hear you!"
  }
}

function sayHiToGrandma(string) {
  if (string.uppercase) {
  return "YES INDEED!"
  }
}

function sayHiToGrandma(string) {
  if ("I love you, Grandma.") {
  return "I love you, too."
  }
}