function shout(string) {
  return string.toUpperCase()
}

function whisper(palabra) {
  return palabra.toLowerCase()
}

function logShout(palabra) {
  console.log(palabra.toUpperCase())
}

function logWhisper(palabra) {
  console.log(palabra.toLowerCase())
}

function sayHiToGrandma(phrase) {
  if (phrase.toLowerCase() === phrase) {
    return 'I can\'t hear you!'
  } else  if (phrase.toUpperCase() === phrase) {
    return 'YES INDEED!'
  } else if (phrase === "I love you, Grandma.") {
    return 'I love you, too.'
  }
}