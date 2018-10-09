var uppercase = "HELLO"
var lowercase = "hello"
var mixedcase = "I love you, Grandma."

function shout(string) {
return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  return console.log("HELLO")
}

function logWhisper(string) {
  return console.log("hello")
}

function sayHiToGrandma (string) {
  if (string === uppercase) {
    return "YES INDEED!"
  } else if (string === lowercase) {
    return "I can't hear you!"
  }
  else if (string === mixedcase) {
    return "I love you, too."
  }
}