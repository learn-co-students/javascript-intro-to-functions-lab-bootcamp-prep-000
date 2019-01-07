function shout(string) {
return string.toUpperCase()
  }

function whisper(string) {
return string.toLowerCase()
  }
  
function logShout(string) {
  console.log(string.toUpperCase())
}
logShout

function logWhisper(string) {
  console.log(string.toLowerCase())
}
logWhisper

function sayHiToGrandma(str) {
  if (str.toUpperCase() ===  str) {
    return "YES INDEED!"
    }
    else if (str.toLowerCase() === str) {
      return "I can't hear you!"
    }
    else if (str === "I love you, Grandma.") {
      return "I love you, too."
    }
}