function shout (string){
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
function sayHiToGrandma (string){
if (string.toLowerCase()===string){
   console.log("I can't hear you!")
//return "I can't hear you!"
}
 else if(string.toUpperCase() === string)){
    console.log('YES INDEED!')
//return 'YES INDEED!'
}
else ('I love you, Grandma.'===string){
   console.log('I love you, too.')
//return 'I love you, too.'
}
}
