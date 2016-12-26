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
  var lower = string
  if (lower.toLowerCase() === lower) {
    return 'I can\'t hear you!'
  }
}

function sayHiToGrandma(string) {
  var lower = string
  if (lower.toLowerCase() === lower) {
    return 'I can\'t hear you!'
  }
  else if (lower.toUpperCase() === lower) {
    return 'YES INDEED!'
  }
  else if (lower = 'I love you, Grandma.') {
    return 'I love you, too.'
  }
}