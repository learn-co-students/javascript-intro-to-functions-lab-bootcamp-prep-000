var string = "hello"
function shout(string) {
  return string.toUpperCase()
}


var string = "hello"
function logShout(string) {
  console.log (string.toUpperCase())
}

var string = "Hello"
function whisper(string) {
  return string.toLowerCase()
}


var string = "hello"
function logWhisper(string) {
  console.log (string.toLowerCase())
}
var string = ["hello","Hello","HELLO","I love you, Grandma."]
function sayHiToGrandma(string) {

if (string === "hello") {
    return "I can't hear you!"
}
if (string === "HELLO"){
    return "YES INDEED!"
}
if (string === "I love you, Grandma.") {
  return "I love you, too.";
}
}