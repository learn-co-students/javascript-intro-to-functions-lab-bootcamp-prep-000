function shout (str) {
  return str.toUpperCase()
}

function whisper (str) {
  return str.toLowerCase()
}

function logShout (str) {
  console.log(str.toUpperCase())
}

function logWhisper (str) {
  console.log(str.toLowerCase())
}

function sayHiToGrandma (str) {
  if (str === "I love you, Grandma.") {
    return "I love you, too."
  } else if (str.toLowerCase() === str) {
    return "I can't hear you!"
  } else if (str.toUpperCase() === str) {
    return "YES INDEED!"
  }
}