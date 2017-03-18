function shout(stringVar) {
  return stringVar.toUpperCase()
}

function whisper(stringVar) {
  return stringVar.toLowerCase()
}

function logShout(stringVar) {
  return console.log(shout(stringVar))
}

function logWhisper(stringVar) {
  return console.log(whisper(stringVar))
}

function sayHiToGrandma(stringVar) {
  if (stringVar.toLowerCase() === stringVar) {
    return "I can't hear you!"
  }
  else if (stringVar.toUpperCase() === stringVar) {
    return "YES INDEED!"
  }
  else if (stringVar === "I love you, Grandma.") {
    return "I love you, too."
  }
}
