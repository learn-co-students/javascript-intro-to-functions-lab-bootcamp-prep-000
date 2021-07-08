function shout(input) {
  return input.toUpperCase()
}

function whisper(input) {
  return input.toLowerCase()
}

function logShout(input) {
  console.log(input.toUpperCase())
}

function logWhisper(input) {
  console.log(input.toLowerCase())
}

function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) {
    return 'I can\'t hear you!'
  }
  else if (string === string.toUpperCase()) {
    return 'YES INDEED!'
  }
  else if (string === 'I love you, Grandma.') {
    return 'I love you, too.'
  }
}
