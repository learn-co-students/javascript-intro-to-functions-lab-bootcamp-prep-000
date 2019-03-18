function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  string = shout(string)
  console.log(string)
}

function logWhisper(string) {
  string = whisper(string)
  console.log(string)
}

function sayHiToGrandma(string) {
  if (string === "I love you, Grandma.") {
    return "I love you, too."
  }
  else if (shout(string) === string) {
    return "YES INDEED!"
  }
  else if (whisper(string) === string) {
    return "I can't hear you!"
  }
}

logShout("hello")
logWhisper("HELLO")

sayHiToGrandma("hello")
sayHiToGrandma("HELLO")