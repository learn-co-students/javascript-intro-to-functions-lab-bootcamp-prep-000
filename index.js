function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
if (string.toUpperCase() === string){
  return string.toLowerCase()
}
}
var string = "HELLO!"
whisper(string)

function logShout(string) {
if (string.toLowerCase() === string){
  console.log(string.toUpperCase())
}
}
var string = "HELLO!"
logShout(string)


function logWhisper(string) {
if (string.toUpperCase() === string){
  console.log(string.toLowerCase())
}
}
var string = "HELLO"
logWhisper(string)


function sayHiToGrandma(string) {
if (string.toLowerCase() === string){
  return "I can't hear you!"
}
else if (string.toUpperCase() === string){
  return "YES INDEED!"
}
else if (string==="I love you, Grandma."){
  return "I love you, too."
}
}
var string = "I love you, Grandma."
sayHiToGrandma(string)
