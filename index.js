function shout(string) {
  return string.toUpperCase()}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  var logShout = string.toUpperCase()
  console.log(logShout)}
function logWhisper(string) {
  var logWhisper = string.toLowerCase()
  console.log(logWhisper)}
function sayHiToGrandma(string) {
  var lowercase = "hello"
  var uppercase = "HELLO"
  var iloveyou = "I love you, Grandma."
  if (string === lowercase) 
  return "I can't hear you!"
  else if (string === uppercase)
  return "YES INDEED!"
  else if (string === iloveyou)
  return "I love you, too."
}
