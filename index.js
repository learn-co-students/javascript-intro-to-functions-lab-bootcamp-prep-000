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
  var uppercase = "HELLO!"
  var upper = uppercase.toUpperCase() === uppercase

  var lowercase = "hello!"
  var lower = lowercase.toLowerCase() === lowercase

  var mixedCase = "Hi there!"
  mixedCase.toLowerCase() === mixedCase //false
  mixedCase.toUpperCase() === mixedCase //false

  if (string === string.toUpperCase()) {
    return "YES INDEED!"
  }
  if (string === string.toLowerCase()) {
    return "I can\'t hear you!"
  }
  if (string === "I love you, Grandma.") {
    return "I love you, too."
  }
}
