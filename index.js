function shout(str) {
  return str.toUpperCase()
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
  var uppercase = string.toUpperCase()
  var lowercase = string.toLowerCase()
  
  if (lowercase === string) {
    return "I can't hear you!"  
  } 
  if (uppercase === string) {
    return "YES INDEED!"
  }
  if (string === "I love you, Grandma.") {
    return "I love you, too."
  }
}