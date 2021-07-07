function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
 console.log(`${string}`.toUpperCase())
}

function logWhisper(string) {
  console.log(`${string}`.toLowerCase())
}

var lowercase = "hello"

lowercase.toLowerCase() === lowercase

var uppercase = "HELLO"

uppercase.toUpperCase() === uppercase

function sayHiToGrandma(string) {
 if (`${string}` === lowercase) {
  return"I can't hear you!"
} else if (`${string}`=== uppercase) {
  return"YES INDEED!"
} else if (`${string}` === `I love you, Grandma.`) {
  return"I love you, too."
}}

