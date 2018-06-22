function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  const spy = console.log("HELLO")
}
function logWhisper(string) {
  const spy = console.log("hello")
}

function sayHiToGrandma(string) {
    var lowercase = string
    var uppercase = string
  if (lowercase.toLowerCase() === lowercase) {
    return 'I can\'t hear you!'
  } else if (uppercase.toUpperCase() === uppercase) {
    return "YES INDEED!"
  } else {
    return "I love you, too."
  }
}
