function shout(string) {
  return string.toUpperCase()
  }
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  console.log (string.toUpperCase())
}
function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  var uppercase = "HELLO"
  uppercase.toUpperCase() === uppercase
  if (string === uppercase) {
    return "YES INDEED!"
  }
  var lowercase = "hello"
  lowercase.toLowerCase() === lowercase
  if (string === lowercase) {
    return  "I can't hear you!"
  }
  var mixedCase = 'I love you, Grandma.'
  mixedCase.toLowerCase() === mixedCase
  mixedCase.toUpperCase() === mixedCase
  if (string === mixedCase) {
    return "I love you, too."
  }
}
