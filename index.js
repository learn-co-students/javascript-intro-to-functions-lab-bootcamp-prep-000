function shout(string) {
  string = string.toUpperCase()
  return string
}

function whisper(string) {
  return string.toLowerCase()
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}



function sayHiToGrandma(string) {
  if (string === "I love you, Grandma.") {
    return("I love you, too.")
  }
  else if (string === string.toLowerCase()) {
    return("I can\'t hear you!")
  }
  else if (string === string.toUpperCase()) {
    return("YES INDEED!")
  }
}

function logShout(string) {
  console.log(string.toUpperCase())
}
