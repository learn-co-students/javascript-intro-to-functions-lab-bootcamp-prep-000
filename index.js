function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(`${string}`.toUpperCase())
}
logShout('hello')

function logWhisper(string) {
  console.log(`${string}`.toLowerCase())
}
logWhisper('HELLO')

function sayHiToGrandma(string) {
  if (string === string.toUpperCase()) {
    return `YES INDEED!`
  }
  else if (string === "I love you, Grandma.") {
    return `I love you, too.`
  }
  else {
    return `I can't hear you!`
  }
}

sayHiToGrandma('hello')
sayHiToGrandma('HELLO')
sayHiToGrandma('I love you, Grandma')
