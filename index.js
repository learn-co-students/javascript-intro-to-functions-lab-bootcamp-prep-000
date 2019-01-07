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
  var ucase = string.toUpperCase()
  var lcase = string.toLowerCase()
  var keyword = "I love you, Grandma."

  if (string === ucase) {
    return "YES INDEED!"
  }

  if (string === lcase) {
    return "I can't hear you!"
  }

  if (string === keyword) {
    return "I love you, too."
  }
}
