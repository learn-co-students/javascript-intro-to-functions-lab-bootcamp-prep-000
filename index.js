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
  // check if uppercase
  if (string.toUpperCase() === string) {
    return 'YES INDEED!'
  } else if (string.toLowerCase() === string) {
    return "I can't hear you!"
  } else if (string === "I love you, Grandma.") {
    return "I love you, too."
  }
}
