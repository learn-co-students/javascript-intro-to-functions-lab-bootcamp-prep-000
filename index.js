function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
    console.log(string.toUpperCase())
}

function logWhisper(string){
    console.log(string.toLowerCase())
}

var uppercase="HELLO!"
uppercase.toUpperCase() === uppercase

var lowercase="hello!"
lowercase.toLowerCase()===lowercase

var mixedCase="Hi there!"
mixedCase.toLowerCase()===mixedCase


function sayHiToGrandma(string) {
  if string===lowercase {
    return "I can't hear you!"
  } if string===lowercase {
    return "YES INDEED!"
  } if string===mixedcase {
    return "I love you, too."
  }
}
