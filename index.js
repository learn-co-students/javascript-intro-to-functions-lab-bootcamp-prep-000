function shout (string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
var uppercase = string.toUpperCase();
  console.log (uppercase)
}

function logWhisper(string) {
  var lowercase = string.toLowerCase();
  console.log(lowercase)
}

function sayHiToGrandma(string) {
var uppercase = string.toUpperCase();
var lowercase = string.toLowerCase();
  
  if (string === uppercase) {
    return "YES INDEED!"
    } else if (string === lowercase) {
      return "I can't hear you!"
    } else if (string === "I love you, Grandma.")
      return "I love you, too."
  }