var uppercase = "HELLO", lowercase = "hello", mixedcase = "Hello"


function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  console.log("HELLO")
}

function logWhisper(string){
  console.log("hello")
}

function sayHiToGrandma(string){
  if(string === "I love you, Grandma."){
    return ("I love you, too.")}
    
  if(string === uppercase){
    return ("YES INDEED!")}
    
  if(string === lowercase){
    return ("I can't hear you!")}
}