function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

var spy = 'hello'
function logShout(string) {
  console.log(spy.toUpperCase()) 
}

function logWhisper(string) {
  console.log(spy.toLowerCase())
}

function sayHiToGrandma(string) {
  if (string === "hello") {
    return 'I can\'t hear you!'
  } else if (string === "HELLO") {
    return 'YES INDEED!'
  } else {
    return 'I love you, too.'
  }
}