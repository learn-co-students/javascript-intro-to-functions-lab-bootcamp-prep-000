var uppercase = "HELLO"
var lowercase = "hello"
var loveYou = "I love you, Grandma."

function shout(string) {
  return string.toUpperCase()
}
shout(lowercase)

function whisper(string) {
  return string.toLowerCase()
}
whisper(uppercase)

function logShout(string) {
  console.log(uppercase)
}
function logWhisper(string) {
  console.log(lowercase)
}

function sayHiToGrandma(string) {
  if (string === lowercase)
  {
  return "I can\'t hear you!"
  }
  else if (string === uppercase)
  {
  return "YES INDEED!"
  }
  return "I love you, too."
}
sayHiToGrandma('hello')

