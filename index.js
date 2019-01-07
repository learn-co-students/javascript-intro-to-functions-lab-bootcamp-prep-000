// Shout Function
function shout(string) {
  return string.toUpperCase()
}

// Whishper Function
function whisper(string) {
  return string.toLowerCase()
}

// Log Shout Function
function logShout(string) {
  string = string.toUpperCase()
  console.log(string)
}

// Log Whisper Function
function logWhisper(string) {
  string = string.toLowerCase()
  console.log(string)
}

// "Say hi to Grandma" Function
function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) {
    return 'I can\'t hear you!'
  }
  else if (string === string.toUpperCase()) {
    return 'YES INDEED!'
  }
  else if (string === "I love you, Grandma.") {
    return "I love you, too."
  }
}