function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  if (string === "hello") {
    string = "I can\'t hear you!"
  }
  else if (string === "HELLO") {
    string = "YES INDEED!"
  }
  else if (string === "I love you, Grandma."){
    string = "I love you, too."
  }
  return string
}
