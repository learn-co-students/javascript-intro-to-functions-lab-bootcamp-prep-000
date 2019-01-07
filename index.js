function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  return console.log("HELLO")
}

function logWhisper(string) {
  return console.log("hello")
}

function sayHiToGrandma (string) {
  if(string.toLowerCase() === string) {
    return "I can't hear you!"
   }
   else if(string.toUpperCase() === string)
   {
      return "YES INDEED!"
    }
    else {return "I love you, too."
   }
    }