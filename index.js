function shout(string) {
 return string.toUpperCase() 
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout() {
   console.log("HELLO")
}
function logWhisper() {
   console.log("hello")
}

function sayHiToGrandma(string) {
 if (string.toLowerCase() === string) 
 return ("I can't hear you!")
 if (string.toUpperCase() === string ) 
 return ("YES INDEED!")
  if (string === `I love you, Grandma.` ) 
 return ("I love you, too.")
}