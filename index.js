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
  if (string === string.toUpperCase()){
    //shout
    return 'YES INDEED!'
  } else if (string === string.toLowerCase()) {
    // whisper
    return 'I can\'t hear you!'
  } else if (string === 'I love you, Grandma.'){
    // love you
    return "I love you, too."
  } else {
    // mixed
    "I dunno."
  }
}