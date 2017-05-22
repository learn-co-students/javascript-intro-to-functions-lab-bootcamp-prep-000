function shout(string) {
  string = string.toUpperCase()
  return string
}

function whisper(string) {
  string = string.toLowerCase()
  return string
}

function logShout(string){
  string = string.toUpperCase()
  return console.log(string)
}

function logWhisper(string){
  string = string.toLowerCase()
  return console.log(string)
}

function sayHiToGrandma(string){
  if (string.toLowerCase() === string){
    return "I can't hear you!"
  } else if (string.toUpperCase() === string){
    return "YES INDEED!"
  } else if (string === "I love you, Grandma."){
    return "I love you, too."
  } else {
    return "none"
  }
}
