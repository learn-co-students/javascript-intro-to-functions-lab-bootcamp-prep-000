function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  let x = string.toUpperCase()
  console.log(x)
}

function logWhisper(string){
  let x = string.toLowerCase()
  console.log(x)
}

function sayHiToGrandma(string) {
  if (string.toUpperCase() === string) {
    return "YES INDEED!"
  }
  else if (string === "I love you, Grandma.") {
    return "I love you, too."
  }
  else {
    return ("I can't hear you!")
}
}
