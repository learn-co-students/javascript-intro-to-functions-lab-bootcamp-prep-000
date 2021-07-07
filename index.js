
function shout(String){
  return String.toUpperCase()
  
}


function logShout(String){
  console.log(shout(String))
}

function whisper(String){
  return String.toLowerCase()
}

function logWhisper(String){
  console.log(whisper(String))
}

function sayHiToGrandma(String){
 if(String.toLowerCase() === String){
   return "I can't hear you!"
 }
 if(String.toUpperCase() === String){
   return "YES INDEED!"
 }
 if(String === `I love you, Grandma.`){
   return "I love you, too."
 }
}