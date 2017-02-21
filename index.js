function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  shout = string.toUpperCase();
  console.log(shout)
}

function logWhisper(string) {
  whisper = string.toLowerCase()
  console.log(whisper)
}

function sayHiToGrandma(string) {
  switch(string) {
    case "hello" :
      return "I can't hear you!"
    case "HELLO" :
      return "YES INDEED!"
    case "I love you, Grandma." :
      return "I love you, too."
  }
}
