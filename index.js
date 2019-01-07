function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  string = shout(string)
  console.log(string)
}

function logWhisper(string){
  string = whisper(string)
  console.log(string)
}

function sayHiToGrandma(string){
   if (string === whisper(string)){
    string = "I can't hear you!"
    return string
  }
  
  else if (string === shout(string)){
    string = "YES INDEED!"
    return string
  }
  
  else if (string === "I love you, Grandma.") {
    string = "I love you, too."
    return string
  }
}