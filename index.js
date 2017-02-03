function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log('HELLO')
}

function logWhisper(string) {
  console.log('hello')
}

var lowercase = 'hello'
var uppercase = 'HELLO'

function sayHiToGrandma(string) {
  if (lowercase.toLowerCase() === lowercase) {
    return "I can't hear you!"
  } else if (uppercase.toLowerCase()===uppercase) {
    return "YES INDEED!"
  } else {
    return "I love you, too."
  }
  }




}
