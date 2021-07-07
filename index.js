function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log ('HELLO')
  return string.toUpperCase()
}

function logWhisper(string) {
  console.log ('hello')
  return string.toLowerCase()
}

var uppercase = "HELLO"
uppercase.toUpperCase() === uppercase
var lowercase = 'hello'
lowercase.toLowerCase() === lowercase 
var mixedCase = 'I love you, Grandma.'
mixedCase.toLowerCase() === mixedCase
function sayHiToGrandma(string){
  if (string===lowercase) {
  return ('I can\'t hear you!')
  } else if (string===uppercase){
  return ('YES INDEED!')
  } else {
  return ('I love you, too.')
  }
}