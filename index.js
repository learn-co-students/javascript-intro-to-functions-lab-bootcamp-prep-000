function shout(string) {
  return string.toUpperCase()
  
}
function whisper(string) {
  return string.toLowerCase()

}
function logShout(string) {
  console.log(shout(string))
}

function logWhisper(string) {
  console.log(whisper(string))
}

function sayHiToGrandma(string){
 
 var lowercase = 'hello!'
 lowercase.toLowerCase() === lowercase
 
 var uppercase = 'HELLO!'
 uppercase.toUpperCase() === uppercase
 
  if (string === lowercase){
    return "I can\'t hear you!"
  }
  
  if (string === uppercase){
    return "YES INDEED!"
    
  }
  
 if (string === 'I love you, Grandma'){
   return "I love you, too"
 }
}
  
  
  
  /////several hours attempted....cannot find answer - i give up
