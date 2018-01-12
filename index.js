function shout (string){
  return string.toUpperCase()
}


function whisper(string) {
  return string.toLowerCase()
}

function logShout (string){
  var a = string.toUpperCase()
  console.log(a)
}


function logWhisper (string){
  var a = string.toLowerCase()
  console.log(a)
}


function sayHiToGrandma(string){
  var a = string 
  if(a === a.toLowerCase()){
    return "I can\'t hear you!"
  }else if(a === a.toUpperCase()){
    return "YES INDEED!"
  }else if(a === "I love you, Grandma."){
    return "I love you, too."
  }
}