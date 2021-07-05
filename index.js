function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function sayHiToGrandma(string) {
  
  var allLowerCase = string.toLowerCase()
  var allUpperCase = string.toUpperCase()
  
  if(allLowerCase === string)
    return "I can't hear you!"
  
  if(allUpperCase === string)
    return "YES INDEED!"
  
  if(string === "I love you, Grandma.")
    return "I love you, too."
  
}

