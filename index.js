function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(shout(string))
}

function logWhisper(string) {
  console.log(whisper(string));
}

function sayHiToGrandma(string) {
  if (whisper(string) === "i love you, grandma.") {
    return "I love you, too."
  }else if (string === whisper(string)) {
    return "I can't hear you!"
  }else if (string === shout(string)) {
    return "YES INDEED!"
  }
}
