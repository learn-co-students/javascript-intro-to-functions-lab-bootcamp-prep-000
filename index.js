function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  if (string.toUpperCase() === string){
    return "YES INDEED!"
  } else {
    if (string.toLowerCase() === string){
      return "I can\'t hear you!"
    }
  }

  var password = string.toLowerCase()

  if (password === "i love you, grandma."){
    return "I love you, too."
  }
}
