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
  var response = ""
  if (string.toLowerCase() === string) {
    response = "I can't hear you!"
  }
  else if (string.toUpperCase() === string) {
    response = "YES INDEED!"
  }
  else if (string = "I love you, Grandma.") {
    response = "I love you, too."
  }
  return response
}
