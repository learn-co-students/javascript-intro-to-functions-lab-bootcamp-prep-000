function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function sayHiToGrandma(string) {
  var uppercase = "HELLO", lowercase = "hello"

  if (string === lowercase) {
    return "I can't hear you!"
  }
  else if (string === uppercase) {
    return "YES INDEED!"
  }

}
