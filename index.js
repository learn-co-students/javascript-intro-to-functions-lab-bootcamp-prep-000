function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log('hello'.toUpperCase())
}

function logWhisper(string) {
  console.log('HELLO'.toLowerCase())
}

function sayHiToGrandma(string) {
  var uppercase = 'HELLO'
  var lowercase = 'hello'
  var mixedCase = 'I love you, Grandma.'

if (string === lowercase) {
  return("I can\'t hear you!")
} else if (string === uppercase) {
  return("YES INDEED!")
} else if (string === mixedCase) {
  return("I love you, too.")
}

}
