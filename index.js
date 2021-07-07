function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  console.log (string)
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  var uppercase = string.toUpperCase()
  var lowercase = string.toLowerCase()
  var mixedCase = "I love you, Grandma."
  
  if (string === lowercase) {
    return "I can\'t hear you!"
  } else if (string === uppercase) {
    return "YES INDEED!"
  } else {
    return "I love you, too."
  }
}