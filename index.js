function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function sayHiToGrandma(string) {
  var upperCase = string.toUpperCase()
  var lowerCase = string.toLowerCase()
  if (string === lowerCase) {
    return "I can't hear you!"
  } else if (string === upperCase) {
    return "YES INDEED!"
  } else if (string === "I love you, Grandma.") {
   return "I love you, too." 
  }
}

function logWhisper(string) {
  let lowerCase = string.toLowerCase()
  console.log(lowerCase)
}

function logShout(string) {
  let upperCase = string.toUpperCase()
  console.log(upperCase)
}

