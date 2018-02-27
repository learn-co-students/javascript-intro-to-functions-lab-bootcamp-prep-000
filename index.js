function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout() {
  console.log('HELLO')
}

function logWhisper() {
  console.log('hello')
}

if sayHiToGrandma('hello') {
  console.log("I can't hear you!")
}

if sayHiToGrandma('HELLO') {
  console.log("YES INDEED!")
}

if sayHiToGrandma('I love you, Grandma.') {
  console.log("I love you, too.")
}
