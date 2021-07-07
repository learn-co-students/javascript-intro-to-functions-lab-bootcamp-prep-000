function shout(string) {
  string = string.toUpperCase()
  return string
}

function whisper(string) {
  string = string.toLowerCase()
  return string
}

function logShout(string) {
  console.log(shout(string))
}

function logWhisper(string) {
  console.log(whisper(string))
}

function sayHiToGrandma(string) {
  if (string === "I love you, Grandma.") {
    return "I love you, too."
  }
  else if (string === shout(string)) {
    return "YES INDEED!"
  }
  else if (string === whisper(string)) {
    return "I can't hear you!"
  }
}