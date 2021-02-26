function shout (string) {
  return string.toUpperCase()
}

function whisper (string) {
  return string.toLowerCase()
}
function logShout(string) {
  console.log(string.toUpperCase())
}
function logWhisper(string) {
  console.log(string.toLowerCase())
}
function sayHiToGrandma(string) {
  var ginger = string
   if (ginger.toUpperCase() === ginger) {
     return "YES INDEED!"
   }
   else if (ginger === "I love you, Grandma.") {
     return "I love you, too."
   }
   else if (ginger.toLowerCase() === ginger) {
     return "I can't hear you!"
   }

}
