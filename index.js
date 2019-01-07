// Return an argument in uppercase
function shout(string) {
  return string.toUpperCase()
}

// Return an argument in lowercase
function whisper(string) {
  return string.toLowerCase()
}

// Print an argument in uppercase
function logShout(string) {
  console.log(string.toUpperCase())
}

// Print an argument in lowercase
function logWhisper(string) {
  console.log(string.toLowerCase())
}

// Return Grandma sentences according to argument
function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) {
    return 'I can\'t hear you!'
  }
  else if (string === string.toUpperCase()) {
    return 'YES INDEED!'
  }
  else if (string === 'I love you, Grandma.') {
    return 'I love you, too.'
  }
}