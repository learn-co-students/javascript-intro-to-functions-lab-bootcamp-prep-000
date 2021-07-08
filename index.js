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

function sayHiToGrandma(text) {
  if (text === 'I love you, Grandma.') {
    return 'I love you, too.'
  } else if (text.toLowerCase() === text) {
    return "I can't hear you!"
  } else if (text.toUpperCase() === text) {
    return "YES INDEED!"
  }
}
