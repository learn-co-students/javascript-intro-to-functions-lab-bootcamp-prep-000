function shout(string){

return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  console.log(string.toUpperCase())
  return
}

function logWhisper(string){
  console.log(string.toLowerCase())
  return
}

function sayHiToGrandma(string){
  var string2 = string
  
  if (string === "I love you, Grandma."){
    return "I love you, too."
  }
  else if (string2.toUpperCase() === string){
    return "YES INDEED!"
  }
  else if (string2.toLowerCase() === string){
    return "I can't hear you!"
  }
}