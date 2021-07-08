function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string){
var a = string
var spy = a.toUpperCase()
console.log(spy)
}

function logWhisper(string){
var a = string
var spy = a.toLowerCase()
console.log(spy)
}

function sayHiToGrandma(string) {
  if (string === "hello") {
  return "I can't hear you!"

} else if (string === "HELLO") {
  return "YES INDEED!"

}  else   {
  return "I love you, too."

}

}
