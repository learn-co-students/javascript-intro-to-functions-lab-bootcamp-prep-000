function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  var spy = string.toUpperCase()
  console.log(`${spy}`)
}

function logWhisper(string) {
  var spy = string.toLowerCase()
  console.log(`${spy}`)
}

function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) {
  return 'I can\'t hear you!' 
  } 
  if (string === string.toUpperCase()) {
  return 'YES INDEED!'
  } 
  if (string === 'I love you, Grandma.') {
  return `I love you, too.`
  }
}