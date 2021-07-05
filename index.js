function shout(string) {
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  console.log(shout(string));
}

function logWhisper(string){
  console.log(whisper(string))
}

function sayHiToGrandma(string){
  let lowerCaseString = string.toLowerCase()
  
  if(lowerCaseString === "i love you, grandma."){
    return "I love you, too."
  }
  
  let upperCaseString = string.toUpperCase()
  
  if(string === lowerCaseString){
    return 'I can\'t hear you!'
  }
  
  if(string === upperCaseString){
    return "YES INDEED!"
  }
  
  return "I can sort of hear you"
}
