function shout(string) {
  return string
}
'Hello!' .toUpperCase() // 'HELLO!'

function shout(string) {
  return string.toUpperCase()
} // 'let's see if this works
// --------------------------------------------------------
function whisper(string) {
  return string
}
'Hello!' .toLowerCase() // 'hello!'

function whisper(string) {
  return string.toLowerCase()
} // now i've done it
// -----------------------------------------------------
function logShout(string) {
  return console.log(string.toUpperCase())
}
// -------------------------------------------------------
function logWhisper(string) {
  return console.log (string.toLowerCase())
}
// --------------------------------------------------------
function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) return "I can't hear you!";
  else if (string === string.toUpperCase()) return "YES INDEED!"
  else if (string === "I love you, Grandma.") return "I love you, too."
}
