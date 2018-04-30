function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  return console.log(shout(string))
}

function logWhisper(string) {
  return console.log(whisper(string))
}

function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) {
    return console.log("I can\'t hear you!")
  } 
  else if (string === string.toUpperCase()) {
    return console.log("YES INDEED!")
  }
  else if (string === "I love you, Grandma.") {
    return console.log("I love you, too.")
  }
}

sayHiToGrandma("HI")
sayHiToGrandma("hi")
sayHiToGrandma("I love you, Grandma.")