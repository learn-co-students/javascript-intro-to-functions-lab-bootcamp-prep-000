function shout(string) {
    return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}
logShout("hello")

function logWhisper(string) {
  console.log(string.toLowerCase())
}
logWhisper("HELLO")

var uppercase = 'HELLO'
var lowercase = 'hello'
function sayHiToGrandma(string) {
if (string === lowercase && lowercase.toLowerCase() === lowercase) {
  return "I can't hear you!"
} else if (string === uppercase && uppercase.toUpperCase() === uppercase) {
  return "YES INDEED!"
} else if (string === "I love you, Grandma.") {
  return "I love you, too."
}
}
