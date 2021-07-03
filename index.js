function shout(String) {
  return String.toUpperCase()
}

function whisper(String) {
  return String.toLowerCase()
}

function logShout(String) {
  console.log (String.toUpperCase())
}

function logWhisper(String) {
  console.log (String.toLowerCase())
}

function sayHiToGrandma(String) {
  if (String.toLowerCase() === String) {
    return "I can't hear you!"
  } else if (String.toUpperCase() === String) {
    return "YES INDEED!"
  } else {
    return "I love you, too."
  }
}