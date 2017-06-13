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
  var boop = string.toLowerCase()
  console.log(boop)
}

function sayHiToGrandma(string){
  if (string === string.toUpperCase()){
    return "YES INDEED!"
  }
  if (string === string.toLowerCase()){
    return "I can't hear you!"
  }
  if (string === "I love you, Grandma."){
    return "I love you, too."
  }
}
