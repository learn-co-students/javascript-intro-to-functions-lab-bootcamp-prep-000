function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  var upperCase = shout (string)
  console.log(upperCase)
}

function logWhisper(string) {
  var lowerCase = whisper(string)
  console.log(lowerCase)
}

function sayHiToGrandma(string) {
  
  if (string.toLowerCase() === string) {
    return "I can't hear you!"
  }
  
  if (string.toUpperCase() === string) {
    return "YES INDEED!"
  }
    
  if (string === "I love you, Grandma.")
    return "I love you, too."
}