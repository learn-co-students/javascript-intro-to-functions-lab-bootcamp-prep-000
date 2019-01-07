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

sayHiToGrandma(string) {
  if (string === string.toUpperCase()) {
    return "YES INDEED!"
  }
  else {
    return "I can't hear you!"
  }
}
