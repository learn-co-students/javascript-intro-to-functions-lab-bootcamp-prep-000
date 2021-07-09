function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(shout(string))
}

function logWhisper(string) {
  console.log(whisper(string))
}

function sayHiToGrandma(string) {
  // console.log(string.toLowerCase())
  if(string.toLowerCase() === string) {
    console.log("A")
    return "I can't hear you!"
  }
  else if(string.toUpperCase() === string) {
    return "YES INDEED!"
  }
  else if(string === "I love you, Grandma.") {
    return "I love you, too."
  }
  else {
    console.log("D")
  }
}

// console.log(sayHiToGrandma("hello"))
