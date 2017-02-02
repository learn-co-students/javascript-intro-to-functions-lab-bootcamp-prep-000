function shout(string) {
  return string.toUpperCase(string)
}

function whisper(string) {
  return string.toLowerCase(string)
}

function logShout(string) {
  console.log(string.toUpperCase(string))
}

function logWhisper(string) {
  console.log(string.toLowerCase(string))
}

function sayHiToGrandma(string) {
  if (string.toLowerCase(string) === string) {
    return "I can't hear you!"
  } else if (string.toUpperCase(string) === string) {
    return "YES INDEED!"
  } else if (string === "I love you, Grandma.") {
    return "I love you, too."
  }
}
