function shout(string) {
  return string.toUpperCase()
}

function whisper(STRING) {
  return STRING.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(STRING) {
  console.log(STRING.toLowerCase())
}

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
