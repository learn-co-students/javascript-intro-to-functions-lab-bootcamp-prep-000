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
}

function sayHiToGrandma(string) {
  var lowerCaseString = string.toLowerCase();
  var upperCaseString = string.toUpperCase();

  if(string === lowerCaseString) {
    return 'I can\'t hear you!'
}
  else if(string === upperCaseString) {
    return 'YES INDEED!'
  }
  else if(string === 'I love you, Grandma.') {
    return 'I love you, too.'
  }
}
