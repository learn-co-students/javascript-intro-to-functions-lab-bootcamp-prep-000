function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(hello) {
  return console.log(hello.toUpperCase())
}

function logWhisper(hello) {
  return console.log(hello.toLowerCase())
}

function sayHiToGrandma(string) {
  if (string == string.toLowerCase()) {
    return "I can't hear you!"
  }
  if (string == string.toUpperCase()) {
    return "YES INDEED!"
  }
  if (string == "I love you, Grandma.") {
    return "I love you, too."
  }
}
