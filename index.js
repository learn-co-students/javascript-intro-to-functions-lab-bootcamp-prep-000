var uppercase = "HELLO!"
var lowercase = "hello!"

var love = "I love you, Grandma."

function shout(String){
  String = String.toUpperCase()
  return String
}


function logShout(String){
  console.log(shout(String))
}

function whisper(String){
  String = String.toLowerCase()
  return String
}

function logWhisper(String){
  console.log(whisper(String))
}

function sayHiToGrandma(string){
  
  if("I love you, Grandma." === string){
    console.log("I love you, too.")
  }
  
  
  if(string.toUpperCase() === string){
    console.log("YES INDEED!")
  } else if(string.toLowerCase() === string){
    console.log("I can't hear you!")
  } 
  
  
}

sayHiToGrandma(uppercase)
sayHiToGrandma(lowercase)
sayHiToGrandma(love)