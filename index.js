function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}


var uppercase = 'HELLO!'

var lowercase = 'hello!'

var mixedCase = 'I love you, Grandma.'

function sayHiToGrandma(string){
  if (string === string.toLowerCase()) {
    return('I can\'t hear you!')
  }
  sayHiToGrandma('hello')
  if (string === string.toUpperCase()) {
    return('YES INDEED!')
  }
  sayHiToGrandma('HELLO')
  if (string === mixedCase) {
    return('I love you, too.')
  }
  sayHiToGrandma('I love you, Grandma.')
}

function logShout(string) {
  if () {
    console.log()
  }
  logWhisper('HELLO')
}
