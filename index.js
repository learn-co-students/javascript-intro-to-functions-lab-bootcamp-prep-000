function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  console.log(`${string}`.toUpperCase())
}
function logWhisper(string) {
  console.log(`${string}`.toLowerCase())
}
function sayHiToGrandma(string) {
  var lowerCase = string, upperCase = string, mixedCase = "I love you, Grandma."
  if (lowerCase.toLowerCase() === lowerCase) {
    return "I can't hear you!"
  }
  else if (upperCase.toUpperCase() === upperCase) {
    return "YES INDEED!"
  }
  else if (mixedCase) {
    return "I love you, too."
  }
}


