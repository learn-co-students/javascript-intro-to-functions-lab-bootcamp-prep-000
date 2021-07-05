// receives an argument, returns all uppercase
function shout(string) {
  return string.toUpperCase()
}

// receives an argument, returns all lowercase
function whisper(string) {
  return string.toLowerCase()
}

// receives an argument, logs all uppercase
function logShout(string) {
  console.log(string.toUpperCase())
}

// receives an argument, logs all lowercase
function logWhisper(string) {
  console.log(string.toLowerCase())
}

/* receives an argument, returns:
    "I can't hear you!" if 'string' is lowercase
    "YES INDEED!" if 'string' is uppercase
    "I love you, too." if 'string' is "I love you, Grandma."
*/
function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) {
    return "I can't hear you!"
  }
  else if (string.toUpperCase() === string) {
    return "YES INDEED!"
  }
  else if (string === "I love you, Grandma.") {
    return "I love you, too."
  }
}
