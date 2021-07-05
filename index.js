// Caps
function shout(string) {
  return string.toUpperCase()
}
// Lower Case
function whisper(string) {
  return string.toLowerCase()
}
// Log Caps
function logShout(string) {
  console.log(string.toUpperCase())
}
// Log Lower Case
function logWhisper(string) {
  console.log(string.toLowerCase())
}
// Say Hi to Grandma <3
function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) {
    return "I can\'t hear you!"
  } else if (string === string.toUpperCase()) {
      return "YES INDEED!"
    } else {
      return "I love you, too."
    }
}