function shout(something){
  return something.toUpperCase()
}
shout('hello')

function whisper(something) {
  return something.toLowerCase()
}
whisper('hello')

function logShout(something) {
  console.log (`${something.toUpperCase()}`)
}
logShout("hello")

function logWhisper(something) {
  console.log(`${something.toLowerCase()}`)
}
logWhisper("hello")

var upperCase = "HELLO"
var lowerCase = "hello"

function sayHiToGrandma(something) {
  if (something === lowerCase) {
    return `I can\'t hear you!`
  }
  else if (something === upperCase) {
    return `YES INDEED!`
  }
  else if (something === "I love you, Grandma.") {
    return `I love you, too.`
  }
}
