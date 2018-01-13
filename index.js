function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(spy) {
  console.log(spy.toUpperCase())
}

function logWhisper(spy) {
  console.log(spy.toLowerCase())
}


function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) {
    return `I can't hear you!`
  } else if (string.toUpperCase() ===string) {
    return 'YES INDEED!'
  } else if (string === 'I love you, Grandma.') {
    return 'I love you, too.'
  }
}
/*
var uppercase = 'HELLO!'
uppercase.toUpperCase() === uppercase

function sayHiToGrandma(string) {
  if (string.toUpperCase() === uppercase) {
    return `YES INDEED!`
  }
}

var mixedCase = 'Hi there!'
mixedCase.toLowerCase() === mixedCase
mixedCase.toUpperCase() === mixedCase

function sayHiToGrandma(string) {
  if (string === `I love you, Grandma.`) {
    return `I love you, too.`
  }
}
*/
