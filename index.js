function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  var upperString = shout(string)
  console.log(upperString)
}

function logWhisper(string) {
  var lowerString = whisper(string)
  console.log(lowerString)
}

function sayHiToGrandma(string) {
  if (string === whisper(string)) {
    return "I can't hear you!"
  } else if (string === shout(string)) {
    return "YES INDEED!"
  } else if (string === "I love you, Grandma.") {
    return "I love you, too."
  } else {
    return "There was an unexpected error. Love, Grandma."
  }
}
