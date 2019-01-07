function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(shout(string));
}

function logWhisper(string) {
  console.log(whisper(string));
}

function sayHiToGrandma(string) {
  if (string === shout(string)) {
    return "YES INDEED!"
  }
  else if (string === whisper(string)) {
    return "I can't hear you!"
  }
  else {
    return "I love you, too."
  }
}