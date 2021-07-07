var string="Hello"
function shout(string){
  return string.toUpperCase() 
}
function whisper(string){
  return string.toLowerCase() 
}

function logShout(string){
  console.log(string.toUpperCase() ) 
}
function logWhisper(string){
  console.log(string.toLowerCase()) 
}
function sayHiToGrandma(string){
  if ("hello"!=string){
    return "I can't hear you"
  }esleif ("HELLO"!= string){
    return "YES INDEED!"
  }elseif("I love you, Grandma."==string){
    return "I love you, too." 
  }
  
}