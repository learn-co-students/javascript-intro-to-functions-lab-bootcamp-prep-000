function shout(string) {
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
console.log(string.toUpperCase())
}

function logWhisper(string){
console.log(string.toLowerCase())
}

function sayHiToGrandma(string){
  var inputString = string
  if (inputString.toUpperCase() === inputString) {
    return 'YES INDEED!'
  } else if (inputString.toLowerCase() === inputString) {
    return 'I can\'t hear you!'
  }else if  (string === 'I love you, Grandma.'){
    return 'I love you, too.'
  }
}
