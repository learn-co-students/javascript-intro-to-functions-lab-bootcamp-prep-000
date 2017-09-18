function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  console.log (string.toUpperCase())
}
function logWhisper(string) {
  console.log (string.toLowerCase())
}
var lowercase = "string"

lowercase.toLowerCase()  === lowercase

var uppercase = "STRING"

uppercase.toUpperCase()  === uppercase

function sayHiToGrandma(string) {
  {
  if (shout(`string`) === uppercase) {

  return ("YES INDEED!") };
  else if (whisper(`string`) === lowercase) {
    return ("I can't hear you!") }
}
}
