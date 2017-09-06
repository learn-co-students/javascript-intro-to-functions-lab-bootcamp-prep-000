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
  var lowercase = 'hello'
  var mixedCase = 'I love you, Grandma.'

  if (string === lowercase) {
    string = "I can\'t hear you!"
    return string
  } else if (string === uppercase) {
      string = "YES INDEED!"
      return string
  } else {
    string = "I love you, too."
    return string
  }}
