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
  var uppercase = "HELLO"
  var lowercase = "hello"
  var iLYG = "I love you, Grandma."
  
  if (string === lowercase) {
    return "I can\'t hear you!"
  } else if (string === uppercase) {
    return "YES INDEED!"
  } else if (string === iLYG) {
    return "I love you, too."
  }
}