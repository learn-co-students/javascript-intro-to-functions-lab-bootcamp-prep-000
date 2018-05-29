function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

logShout("hello")

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  return string
}

sayHiToGrandma(hello).toLowerCase()
sayHiToGrandma(hello).toUpperCase()
sayHiToGrandma('I love you, Grandma.')