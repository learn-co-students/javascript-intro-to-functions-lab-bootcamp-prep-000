function shout(string) {
  console.log(string.toUpperCase);
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  var logString = string.toUpperCase()
  console.log(logString)
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
  if (string.toUpperCase() === string) {
    return "YES INDEED!"
  } else if (string.toLowerCase() === string) {
    return "I can't hear you!"
  } else {
    return "I love you, too."
  }
}
