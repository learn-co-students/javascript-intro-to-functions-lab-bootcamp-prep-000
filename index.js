var string = "Hello!"

var Grandma1 = "I can't hear you!"
var Grandma2 = "YES INDEED!"
var Grandma3 = "I love you, too."

var uppercase = "HELLO!"

uppercase.toUpperCase() === uppercase // true
 
var lowercase = 'hello!'
 
lowercase.toLowerCase() === lowercase // true
 
var mixedCase = 'Hello!'
 
mixedCase.toLowerCase() === mixedCase // false
 
mixedCase.toUpperCase() === mixedCase // false


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
  if(string === string.toLowerCase()){
    return(Grandma1)

  }else if(string === string.toUpperCase()){
    return(Grandma2)
    
  }else if(string === "I love you, Grandma."){
    return(Grandma3)
  }
  }
  
