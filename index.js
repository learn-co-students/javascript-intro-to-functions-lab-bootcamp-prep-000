function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  var spy = shout(string)
  console.log(spy)
}

function logWhisper(string) {
  var spy = whisper(string)
  console.log(spy)
}

function sayHiToGrandma(string) {
  if (string === whisper(string)) {
    return "I can't hear you!"
  } 
  if (string === shout(string)) {
    return "YES INDEED!"
  } 
  if (string === "I love you, Grandma.") {
    return "I love you, too."
  }
}