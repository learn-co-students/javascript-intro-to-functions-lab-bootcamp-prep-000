 function shout(string) {
   return string.toUpperCase() 
 }

function whisper(string) {
  return string.toLowerCase() 
}

function logShout(string) { console.log(string.toUpperCase() )}

function logWhisper(string) { console.log(string.toLowerCase() )}
var uppercase = "HELLO!"
 
uppercase.toUpperCase() === uppercase // true
 
var lowercase = 'hello!'
 
lowercase.toLowerCase() === lowercase // true

function sayHiToGrandma(string) {
if (string=='HELLO'){
  return  ('YES INDEED!')
}
if (string=='hello'){
  return ('I can\'t hear you!')
}
if (string=='I love you, Grandma.'){
  return ('I love you, too.')
}
}
