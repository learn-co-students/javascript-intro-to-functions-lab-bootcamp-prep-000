function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  return console.log(string.toUpperCase())
}
function logWhisper(string) {
  return console.log(string.toLowerCase())
}


var uppercase = "HELLO"
uppercase.toUpperCase() === uppercase
var lowercase = "hello"
lowercase.toLowerCase() === lowercase

function sayHiToGrandma(string) {
  if (string===string.toLowerCase()) {
    return 'I can\'t hear you!'
  } else if (string===string.toUpperCase()) {
    return 'YES INDEED!'
  } else if (string==="I love you, Grandma.") {
    return "I love you, too."
  } else {}
}

