function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log('HELLO')
}

function logWhisper(string) {
  console.log('hello')
}

function sayHiToGrandma(string) {
  var lowercase = 'I can\'t hear you!'
  string.toLowerCase() === string // true
  //return lowercase;
  var uppercase = 'YES INDEED!'
  string.toUpperCase() === string // true
  //return uppercase;
  var mixedCase = 'I love you, too.'
  mixedCase.toLowerCase() === mixedCase // false
  mixedCase.toUpperCase() === mixedCase // false
  //return mixedCase;
}
