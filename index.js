//receives one argument and returns it in all caps
function shout(string) {
  return string.toUpperCase()
}
//receives one argument and returns it in all lowercase
function whisper(string) {
  return string.toLowerCase()
}
//calls console.log() its one argument in all caps
function logShout(string) {
  return console.log(string.toUpperCase())
}
//calls console.log() its one argument in all lowercase
function logWhisper(string) {
  return console.log(string.toLowerCase())
}
//returns "I can\'t hear you!" if `string` is lowercase, returns "YES INDEED!" if `string` is uppercase,
//returns "I love you, too." if `string` is "I love you, Grandma."
function sayHiToGrandma(string) {
  if (string === "I love you, Grandma.") {return "I love you, too."}
  else if (string.toLowerCase() === string) {return "I can\'t hear you!"}
  else if (string.toUpperCase() === string) {return "YES INDEED!"}
}
