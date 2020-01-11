var uppercase = 'hello'.toUpperCase()

var lowercase = 'HELLO'.toLowerCase()
 
function shout(string){
  return uppercase
}

function whisper(string){
  return lowercase
}

function logShout(string){
  return console.log('hello'.toUpperCase())
}

function logWhisper(string){
  return console.log('HELLO'.toLowerCase())
}

function sayHiToGrandma(string){
 
 if(string == lowercase) {
   return "I can't hear you!"
   
 }else if(string == uppercase){
   return "YES INDEED!"
   
 }else if (string == "I love you, Grandma."){
   return "I love you, too."
   
 }
 
}