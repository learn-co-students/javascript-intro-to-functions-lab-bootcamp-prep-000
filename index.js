function shout(string){
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
  var stringCheck = string
  if(stringCheck.toUpperCase() === stringCheck){
    return "YES INDEED!"
  }

  if(stringCheck.toLowerCase() === stringCheck){
    return "I can't hear you!"
  }

  if(stringCheck.toLowerCase() !== stringCheck &&
     stringCheck.toUpperCase() !== stringCheck){
       return "I love you, too."
     }
}
