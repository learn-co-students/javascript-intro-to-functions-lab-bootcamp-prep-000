function shout(string) {
  return string.toUpperCase('hello')
}

function whisper(string) {
  return string.toLowerCase('HELLO')
}

function logShout(string) {
  var spy=string.toUpperCase("HELLO")
    return console.log(spy)
}


function logWhisper(string) {
  var spy=string.toLowerCase("hello")
    return console.log(spy)
}

function sayHiToGrandma(string) {
if (string===string.toLowerCase()) {
  return "I can't hear you!"}
else if (string===string.toUpperCase()) {
    return "YES INDEED!"}
else {
    return "I love you, too."
  }
}