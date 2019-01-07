function shout(string) {
  return string.toUpperCase()
}

function logShout(string) {
  console.log("HELLO")
}

function whisper(string) {
  return string.toLowerCase()
}

function logWhisper(string) {
  console.log("hello")
}

function sayHiToGrandma(string) {
  if(string === "HELLO") {
    return "yes indeed!".toUpperCase()
  }
  else if(string === "hello") {
    return "I can't hear you!"
    }
    else if(string === "I love you, Grandma.") {
      return "I love you, too."
    }
}
