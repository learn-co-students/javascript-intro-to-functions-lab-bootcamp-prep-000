function shout(a) {
  return a.toUpperCase()
}

function whisper(b) {
  return b.toLowerCase()
}

function logShout(c) {
  return console.log(c.toUpperCase())
}

function logWhisper(d) {
  return console.log(d.toLowerCase())
}

function sayHiToGrandma(e) {
  if(e === e.toLowerCase()) {
    return "I can\'t hear you!"
}
  if(e === e.toUpperCase()) {
    return "YES INDEED!"
}
  if(e === `I love you, Grandma.`) {
    return "I love you, too."
  }
}
