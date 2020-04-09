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
var cant = "I can't hear you!"
var yes = "YES INDEED!"
var love = "I love you, too."
function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) {
    return cant;
  }
  if (string.toUpperCase() === string) {
    return yes;
  }
  if (string === "I love you, Grandma.")
  return love;
}
sayHiToGrandma(string.toLowerCase())
sayHiToGrandma(string.toUpperCase())
sayHiToGrandma("I love you, Grandma.")
