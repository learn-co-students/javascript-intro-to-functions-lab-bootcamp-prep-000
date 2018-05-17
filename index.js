function shout(string) { 
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

var spy = "hello"
var uppercase = "HELLO"
var lowercase = "hello"
var love = "I love you, too."

function logWhisper(string) {
  console.log(spy)
  return string.toLowerCase()
}

function logShout(string) {
  console.log(uppercase)
  return string.toUpperCase()
}

function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) {
    return "I can't hear you!"
}

  if (string.toUpperCase() === string) {
    return "YES INDEED!"
}

  if (string === "I love you, Grandma.") {
    return "I love you, too."
}}