function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase('spy'))
}

function logWhisper(string) {
  console.log(string.toLowerCase('spy'))
}

function sayHiToGrandma(string) {
  if (string.toLowerCase) {
    return "I can't hear you!"
  } else if (string.toUpperCase) {
    return "YES INDEED!"
  } else if (string === "I love you, Grandma.") {
    return "I love you, too."
  }
}
