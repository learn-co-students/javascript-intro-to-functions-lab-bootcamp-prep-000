function shout(text) {
  return text.toUpperCase()
}

function whisper(text) {
  return text.toLowerCase()
}

function logShout(text) {
  console.log(shout(text))
}

function logWhisper(text) {
  console.log(whisper(text))
}

function sayHiToGrandma(text) {
  if (text === text.toLowerCase()) {
    return 'I can\'t hear you!'
  } else if (text === text.toUpperCase()) {
    return 'YES INDEED!'
  } else if (text === 'I love you, Grandma.') {
    return 'I love you, too.'
  }
}
