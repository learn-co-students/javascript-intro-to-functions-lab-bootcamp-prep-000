function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
//  string = string.toUpperCase()
  console.log(string.toUpperCase())
  if (string === "poop") {
    console.log('Oh, gross')
  }
  else console.log('Whatever!')
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) {
    console.log("I can't hear you")
    return 'I can\'t hear you!'
  }
  else if (string === string.toUpperCase()) {
    console.log("Yes indeed!")
    return 'YES INDEED!'
  }
  else if (string = "I love you, Grandma") {
    return "I love you, too."
  }
}
