//shout
function shout(string) {
  return string.toUpperCase()
}
//whisper
function whisper(string) {
  return string.toLowerCase()
}
//logShout
function logShout(string) {
  console.log(shout(string))
}
//logWhisper
function logWhisper(string) {
  console.log(whisper(string))
}
//sayHiToGrandma
function sayHiToGrandma(string) {
  if (string.toLowerCase() === string)
  {return "I can't hear you!" }
  else if (string.toUpperCase() === string) {
    return "YES INDEED!"
  }
  else if (string === "I love you, Grandma.") {
    return "I love you, too."
  }
}

var upperCase = "HELLO"

upperCase.toUpperCase === upperCase

var lowerCase = "hello"

lowerCase.toLowerCase === lowerCase

var mixedCase = "Hello"

mixedCase.toLowerCase === mixedCase
mixedCase.toUpperCase === mixedCase
