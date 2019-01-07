function shout (string) {
  return string.toUpperCase()
}
function whisper (string) {
  return string.toLowerCase()
}
function logShout (string) {
  string = string.toUpperCase()
  console.log(string)
}
function logWhisper (string) {
  string = string.toLowerCase()
  console.log(string)
}
function sayHiToGrandma (string) {
  var uppercase = string.toUpperCase()
  var lowercase = string.toLowerCase()
  if (string === "I love you, Grandma.") {
    return("I love you, too.")
  } 
  else if (string === uppercase) {
    return("YES INDEED!")
  }
  else if (string === lowercase) {
     return("I can't hear you!")
  }
}