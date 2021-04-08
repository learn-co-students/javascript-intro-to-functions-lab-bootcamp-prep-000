function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string) {
  let newvar = string.toUpperCase()
  return console.log(newvar)
}

function logWhisper(string) {
  let newvar = string.toLowerCase()
  return console.log(newvar)
}

function sayHiToGrandma(string) {
    if (string === string.toLowerCase()) {
        return "I can't hear you!"
    }
    else if (string === string.toUpperCase()) {
        return "YES INDEED!"
    }
    else if (string === "I love you, Grandma.") {
        return "I love you, too."
    }
    else {
        return "idk my BFF Jill"
    }
}


