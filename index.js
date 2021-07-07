function shout(string) {
  return string.toUpperCase(
)
}

function whisper(string) {
  return string.toLowerCase(
)
}

function logShout(hello) {
  console.log(('hello').toUpperCase())
}

function logWhisper(HELLO) {
  console.log(('HELLO').toLowerCase())
}

function sayHiToGrandma(string) {
 if (shout(string) === string) {
  return "YES INDEED!"
  }
  if (whisper(string) === string) {
  return "I can't hear you!"
  }
  if (string === "I love you, Grandma.") {
    return "I love you, too."
  }
}
