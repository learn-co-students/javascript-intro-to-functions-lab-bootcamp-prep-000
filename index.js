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
  var cas = string; 
  if(cas === string.toUpperCase()){
    return("YES INDEED!")
  } else if (cas === string.toLowerCase()){
    return("I can't hear you!")
  } else if (cas === "I love you, Grandma."){
    return("I love you, too.") 
    
  }
  
  
}