function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout() {
  console.log(shout('hello'))
}

function logWhisper() {
  console.log(whisper('HELLO'))
}

function sayHiToGrandma(string) {
  if (string.toUpperCase() === string) {
    return "YES INDEED!"
  }
  if (string.toLowerCase() === string){
    return "I can't hear you!"
  }
  if (string === "I love you, Grandma.") {
    return "I love you, too."
  }
}