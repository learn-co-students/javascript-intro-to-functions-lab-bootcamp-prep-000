function shout(string) {
return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  console.log("HELLO")
}
function logWhisper(string) {
  console.log("hello")
}

function sayHiToGrandma(string) {
  if (string === "I love you, Grandma.") {return "I love you, too."}
  else if (string.toLowerCase() === string) {return "I can\'t hear you!"}
  else if (string.toUpperCase() === string) {return "YES INDEED!"}
}
