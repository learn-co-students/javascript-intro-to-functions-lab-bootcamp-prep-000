function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

//This is wrong... fix
function logShout(spy) {
  console.log('${spy}')
}
logShout('hello')

//This is wrong... fix
function logWhisper(spy) {
  console.log('${spy}')
}
logWhisper('HELLO')

function sayHiToGrandma(string) {
  return string.toLowerCase()
}
sayHiToGrandma('hello')
