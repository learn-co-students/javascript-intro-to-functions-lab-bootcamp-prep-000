function shout(string) {
  return string.toUpperCase()
}

shout('yone')

function whisper(string) {
  return string.toLowerCase()
}

whisper('YONE')

function logShout(string) {
  const spy = 'HELLO'
  console.log(spy)
}

logShout('you')

function logWhisper(string) {
  const spy = 'hello'
  console.log(spy)
}

logWhisper('you')

function sayHiToGrandma(string) {
  if (string === 'I love you, Grandma.') {
    return "I love you, too."
  } else if (string == string.toUpperCase()) {
    return "YES INDEED!"
  } else {
    return "I can't hear you!"
  }
}


