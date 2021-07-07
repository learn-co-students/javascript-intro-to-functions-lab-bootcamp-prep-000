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
  var s = string
  if (s.toLowerCase() === string) {
    return "I can't hear you!"
  } else if (s.toUpperCase() === string) {
    return "YES INDEED!"
  } else if (s == "I love you, Grandma.") {
    return "I love you, too."
  }
}