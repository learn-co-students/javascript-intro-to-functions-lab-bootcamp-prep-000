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
  var lowercase = string
  var uppercase = string
  if (lowercase.toLowerCase() === string) {
    return "I can't hear you!"
  }
  else if (uppercase.toUpperCase() === string) {
    return "YES INDEED!"
  }
  else if ("I love you, Grandma." === string) {
    return "I love you, too."
  }
}
