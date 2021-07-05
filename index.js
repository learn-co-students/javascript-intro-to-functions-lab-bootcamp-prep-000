function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  var uppercase = string.toUpperCase()
  console.log(uppercase)
}

function logWhisper(string) {
  var lowercase = string.toLowerCase()
  console.log(lowercase)
}

function sayHiToGrandma(string) {
  var lowercase = string.toLowerCase()
  if (string === lowercase) {
    return "I can't hear you!"
  }
  var uppercase = string.toUpperCase()
  if (string === uppercase) {
    return "YES INDEED!"
  }
  var loveMessage = "I love you, Grandma."
  if (string === loveMessage) {
    return "I love you, too."
  }
}