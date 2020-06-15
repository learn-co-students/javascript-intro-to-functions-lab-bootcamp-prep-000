function shout(input) {
  return input.toUpperCase()
}

function whisper(input) {
  return input.toLowerCase()
}

function logShout(input) { 
  console.log(input.toUpperCase())
}

function logWhisper(input) {
  console.log(input.toLowerCase())
}

function sayHiToGrandma(string) {
  if (string === "I love you, Grandma.") {
    return "I love you, too."
  } else if (string === shout(string)) {
    return "YES INDEED!"
  } else if (string === whisper(string)) {
    return "I can't hear you!"
  }
}