function shout(String){
  return String.toUpperCase()
}

function whisper(String){
  return String.toLowerCase()
}

function logShout(String){
  console.log (String.toUpperCase())
}

function logWhisper(String) {
  console.log (String.toLowerCase())
}

function sayHiToGrandma(string){
  if (string.toUpperCase()===string){
    return "YES INDEED!"
  }
  else if (string.toLowerCase()===string){
    return "I can\'t hear you!"
  }
  else if (string==="I love you, Grandma."){
    return "I love you, too."
  }
}
