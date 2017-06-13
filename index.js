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
  var upper = string.toUpperCase()
  var lower = string.toLowerCase()
  var output
  if (string === upper){
    output = "YES INDEED!"
    return output
  }
  else if (string === lower){
    output = "I can't hear you!"
    return output
  }
  else if (string === "I love you, Grandma."){
    output = "I love you, too."
    return output
  }
}
