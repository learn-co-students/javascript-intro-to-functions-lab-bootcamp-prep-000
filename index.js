function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  var foo = string.toUpperCase()
  console.log(foo)
}

function logWhisper(string){
   var foo = string.toLowerCase()
  console.log(foo)
  
}

function sayHiToGrandma(string){
  
  if(string.toLowerCase() === string){
    
    return "I can\'t hear you!"
  } else if(string.toUpperCase() === string){ 
    return "YES INDEED!"
  } else {
    
    return "I love you, too."
    
  }
  
  
}
