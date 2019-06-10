function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  console.log(string.toUpperCase())
}
function logWhisper(string) {
  console.log(string.toLowerCase())
}function sayHiToGrandma(string) {
  var lowercase = 'hello'
  if (string === lowercase)
  return 'I can\'t hear you!'
  var uppercase = 'HELLO'
  if (string === uppercase)
  return 'YES INDEED!'
  var mixedCase = 'I love you, Grandma.'
  if (string === mixedCase)
  return 'I love you, too.'
}
