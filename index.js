// shout
function shout(string) {
  return string.toUpperCase()
}

// whisper
function whisper(string) {
  return string.toLowerCase()
}

// logShout
function logShout(string) {
  console.log(shout(string))
}

// logWhisper
function logWhisper(string) {
  console.log(whisper(string))
}

// sayHiToGrandma
function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) {
    return "I can't hear you!"
  }
  if (string.toUpperCase() === string) {
    return "YES INDEED!"
  }
  if (string === "I love you, Grandma.") {
    return "I love you, too."
  }
}
