function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  var logShout = string.toUpperCase()
  console.log(logShout)
}

function logWhisper(string) {
  var logWhisper = string.toLowerCase()
  console.log(logWhisper)
}

function sayHiToGrandma(string) {
  var lowercase = string.toLowerCase()
  if (string === lowercase)
  return "I can't hear you!"
  
  var uppercase = string.toUpperCase()
  if (string === uppercase)
  return "YES INDEED!"
  
  var mixedCase = "I love you, Grandma."
  if (string === mixedCase)
  return "I love you, too."
}