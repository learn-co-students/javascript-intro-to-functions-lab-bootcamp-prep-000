function shout(string) {
  return string.toUpperCase()
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
  if (string.toUpperCase() === string) {
    return "YES INDEED!"
  } else if (string.toLowerCase() === string) {
    return "I can't hear you!"
  } else if (string === "I love you, Grandma.") {
    return "I love you, too."
  } else {
    return "I can't tell if you're whispering or shouting."
  }
}

console.log(sayHiToGrandma("What's up G Ma?"))

