function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  var lowerStr = string.toLowerCase();
  var upperStr = string.toUpperCase();
  if (string === lowerStr) {
    return "I can't hear you!"
  } else if (string === upperStr) {
      return "YES INDEED!"
  } else {
    return "I love you, too."
  }
}
