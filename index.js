function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  return console.log(shout(string))
}

function logWhisper(string) {
  return console.log(whisper(string))
}

function sayHiToGrandma(string) {
  var lowercase = whisper(string)
  var uppercase = shout(string)
  var mixedCase = "I love you, Grandma."

  if (lowercase === string) {
    return "I can\'t hear you!"
  } else if (uppercase === string ) {
    return "YES INDEED!"
  } else if (mixedCase === string) {
    return "I love you, too."
  }
}
