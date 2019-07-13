var uppercase = "HELLO!"
uppercase.toUpperCase() === uppercase

var lowercase = "hello!"
lowercase.toLowerCase() === lowercase

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

function sayHiToGrandma(String){
  if(String === 'HELLO'){
    return console.log("YES INDEED!")
  } else if(String === 'hello'){
    return console.log("I can't hear you!")
  }
  
  if(String === love){
    return console.log("I love you, too.")
  }
  
}

sayHiToGrandma(love)
sayHiToGrandma(lowercase)
sayHiToGrandma(uppercase)
sayHiToGrandma(lowercase)
sayHiToGrandma(love)