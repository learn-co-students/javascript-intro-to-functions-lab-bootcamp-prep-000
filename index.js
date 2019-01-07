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

function sayHiToGrandma(greeting){
  if(greeting === greeting.toLowerCase()){
    return "I can't hear you!"
  }else if(greeting === greeting.toUpperCase()){
    return "YES INDEED!"
        }else if(greeting === "I love you, Grandma."){
    return "I love you, too."
  }
}
