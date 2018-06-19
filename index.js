function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}
logShout('Hello')

function logWhisper(string) {
  console.log(string.toLowerCase())
}
logShout('Hello')

function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) {
  return `I can't hear you!`
  }
  else if (string === string.toUpperCase()) {
    return `YES INDEED!`
  }
  else if (string === "I love you, Grandma.") {
    return `I love you, too.`
  }
}
sayHiToGrandma(string.toLowerCase())
sayHiToGrandma(string.toUpperCase())
sayHiToGrandma("I love you, Grandma.")