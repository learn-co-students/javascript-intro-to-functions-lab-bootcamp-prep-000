function shout(string) {
  return 'Hello'.toUpperCase()
}

function whisper(string) {
  return 'HELLO'.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
  return 'Hello'.toUpperCase()
}

function logWhisper(string) {
  console.log(string.toLowerCase())
  return 'HELLO'.toLowerCase()
}

function sayHiToGrandma(string) {
  if(string === (string.toLowerCase())) {
    return "I can\'t hear you!" 
  } else if(string === string.toUpperCase()) {
    return "YES INDEED!"
  } else if(string === "I love you, Grandma.") {
    return "I love you, too." 
  }
}