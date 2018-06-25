function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  var uppercase = string.toUpperCase()
  console.log(uppercase)
}

function logWhisper(string) {
  var lowercase = string.toLowerCase()
  console.log(lowercase)
}

function sayHiToGrandma(string) {
  var hi = string
  if (string.toLowerCase() === string) {
    return "I can\'t hear you!"
  }
  if (string.toUpperCase() === string) {
    return 'YES INDEED!'
  }
  if (string === "I love you, Grandma.") {
    return 'I love you, too.'
  }
}