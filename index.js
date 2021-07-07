function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  var uppercase = string.toUpperCase()
  string.toUpperCase() === uppercase
  console.log('HELLO')
}

function logWhisper(string) {
  var lowercase = string.toLowerCase()
  string.toLowerCase() === lowercase
  console.log('hello')
}

function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) {
    return "I can\'t hear you!"
}
  if (string === string.toUpperCase()) {
    return "YES INDEED!"
}
  if (string === string.toUpperCase()) {
    return "I love you, too."}
  else (string === string.toLowerCase())
    return "I love you, too."
}
