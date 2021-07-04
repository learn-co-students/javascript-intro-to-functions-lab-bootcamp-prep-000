function shout(String) {
  return String.toUpperCase()
}

function whisper(String) {
  return String.toLowerCase()
}

function logShout(String) {
  console.log(String.toUpperCase())
}

function logWhisper(String) {
  console.log(String.toLowerCase())
}

function sayHiToGrandma(String) {
  if (String === String.toLowerCase()) {
    return "I can't hear you!"
  }
  else if (String === String.toUpperCase()) {
    return "YES INDEED!"
  }
  else if (String === "I love you, Grandma.") {
    return "I love you, too."
  }
}