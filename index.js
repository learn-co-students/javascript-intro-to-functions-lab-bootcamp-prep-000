var a = "hello"
var b = "HELLO"
function shout(string)
{
  return a.toUpperCase()
}
function whisper(string) {
  return b.toLowerCase()
}
function logShout(string) {
  console.log(a).toUpperCase()
}
function logWhisper(string) {
  console.log(b).toLowerCase()
}
function sayHiToGrandma(string) {
  if (a === a.toLowerCase()) {
    return "I can't hear you!"
  }
else if (a === a.toUpperCase()) {
  return "YES INDEED!"
}
else(a = "I love you, Grandma.") {
  return "I love you, too."
}
}
