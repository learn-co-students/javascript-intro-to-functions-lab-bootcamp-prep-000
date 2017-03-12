function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  console.log(shout(string))
}
function logWhisper(string) {
  console.log(whisper(string))
}
function sayHiToGrandma(string) {
  switch(string) {
    case whisper(string):
    return ("I can't hear you!")
    case shout(string):
    return ("YES INDEED!")
    case "I love you, Grandma.":
    return ("I love you, too.")
  }
  }
