function shout(str) {
  return str.toUpperCase()
}

function whisper(str) {
  return str.toLowerCase()
}

function logShout(str) {
  console.log(str.toUpperCase())
}

function logWhisper(str) {
  console.log(str.toLowerCase())
}

function sayHiToGrandma(str) {
  switch (str) {
    case str.toLowerCase():
      return "I can\'t hear you!"
    case str.toUpperCase():
      return "YES INDEED!"
    default:
      break;
  }
  return str === "I love you, Grandma." ? "I love you, too." : null
}
