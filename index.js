function shout(string){
  return string.toUpperCase()
}


function logShout(string){
  console.log(string.toUpperCase())
}

function whisper(string){
  return string.toLowerCase()
}

function logWhisper(string){
  var logStr = string.toLowerCase()
  console.log(logStr)
}

function sayHiToGrandma(string){
  if(string === string.toLowerCase()){
    return 'I can\'t hear you!'
  } else if(string === string.toUpperCase()){
    return 'YES INDEED!'
  } else {
    return 'I love you, too.'
  }
}
