function shout(string) {
  return string.toUpperCase()
}

function sayHiToGrandma(string){
  if (string === string.toLowerCase()){
    return "I can\'t hear you!"
  }
  if (string === "I love you, Grandma."){
    return "I love you, too."
  }
  return "YES INDEED!"
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