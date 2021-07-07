function shout(string) {
  return string.toUpperCase()
}

function whisper(call) {
  return call.toLowerCase()
}

function logShout(logString) {
  console.log('hello'.toUpperCase())
}

function logWhisper(string) {
  console.log('hello'.toLowerCase())
}

function sayHiToGrandma(string) {
  if (string === string.toLowerCase())
    return "I can\'t hear you!"
  if (string === "I love you, Grandma.")
    return "I love you, too."
  else (string === string.toUpperCase())
    return "YES INDEED!"
}