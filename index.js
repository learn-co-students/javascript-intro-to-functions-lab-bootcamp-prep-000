function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  if (string===whisper(string)) {
    return "I can't hear you!"
  }
  if (string===shout(string)) {
    return "YES INDEED!"
  }
  if (string!=whisper(string) && string!=shout(string)) {
    return "I love you, too."
  }
}
