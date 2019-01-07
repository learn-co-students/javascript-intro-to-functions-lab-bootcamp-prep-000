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

function sayHitToGrandma(string){
  return string
}

function sayHiToGrandma(string){
  var uppercase = "HELLO"
  var lowercase = "hello"
  var mixedcase = "I love you, Grandma."
  
  if (string === uppercase){
   return "YES INDEED!"
   } 
  
  if (string === lowercase){
   return "I can\'t hear you!"
   }
 
 if (string === mixedcase){
   return "I love you, too."
   }
}