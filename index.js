function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logWhisper(string) {
  console.log('hello')
}

function logShout(string) {
  console.log('HELLO')
}

var lowercase = 'hello'
var uppercase = 'HELLO'
var grandma = 'I love you, Grandma.'
function sayHiToGrandma(string) {
  if (string === lowercase) {
    return "I can't hear you!";
  } else if (string === uppercase) {
    return "YES INDEED!";
  } else if (string === grandma) {
    return "I love you, too.";
  }
}
