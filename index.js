function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
   console.log(`${string}`.toUpperCase())
}

function logWhisper(string) {
   console.log(`${string}`.toLowerCase())
}
function sayHiToGrandma(string) {
  var mixedCase = string
  if (`${string}`.toLowerCase() === mixedCase) {
      return "I can't hear you!"
      
   }  else if (`${string}`.toUpperCase() === mixedCase) {
      return "YES INDEED!"
      
   }  else if (`${string}` === "I love you, Grandma.") {
      return "I love you, too."
  }
}
