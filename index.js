function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  console.log (string.toUpperCase())
}

function logWhisper(string){
  console.log (string.toLowerCase())
}

function sayHiToGrandma (string){
var word = "I love you, Grandma."
    if(string.toLowerCase() === string){
      return "I can't hear you!"
}else if (string.toUpperCase()=== string){
  return "YES INDEED!"
}else if (string === word){
  return "I love you, too."
}

}
