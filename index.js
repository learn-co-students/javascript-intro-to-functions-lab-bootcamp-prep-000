function shout(String){
  return String.toUpperCase()
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
  if(string == "I love you, Grandma."){
    return "I love you, too."
  }
  if (string.toUpperCase() === string){
    return 'YES INDEED!'
    }
  else if (string.toLowerCase() === string){
    return 'I can\'t hear you!'
    }
}
