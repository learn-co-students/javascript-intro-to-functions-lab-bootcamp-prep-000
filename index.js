function shout(string)  {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  string = string.toUpperCase()
  console.log(string)
}

function logWhisper(string) {
  string = string.toLowerCase()
  console.log(string)
}

function sayHiToGrandma(string) {
  switch(string) {
  case "hello":
    return "I can't hear you!"
  case "HELLO":
    return "YES INDEED!"
  default:
    return "I love you, too."
  }
}
