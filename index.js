var string = "Hello"
var response = "What?"

function doNothing() {}
function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  return console.log(shout(string))
}
function logWhisper(string) {
  return console.log(whisper(string))
}
function sayHiToGrandma(string) {
  {
  if(string === shout(string))
    return response = "YES INDEED!"
   else if(string === whisper(string))
    return response = "I can't hear you!"
  else if(string === "I love you, Grandma.")
  return response = "I love you, too."
  else doNothing()
  }
}
