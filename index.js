function shout(string) {
  return string.toUpperCase() //HELLO!
}

function whisper(string) {
  return string.toLowerCase() //HELLO!
}

function logShout(string) {
  console.log('HELLO') //LOGSHOUT
}

function logWhisper(string) {
  console.log('hello') //LOGWHISPER
}

function sayHiToGrandma(string) {
if (string.toLowerCase()===string)  {
  return('I can\'t hear you!')
}
if (string.toUpperCase()===string) {
  return('YES INDEED!')
}
if (string==='I love you, Grandma.'){
  return('I love you, too.')

}
  
  }