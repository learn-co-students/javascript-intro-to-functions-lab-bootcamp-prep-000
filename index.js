function shout(string){
  return string.toUpperCase()
}
function whisper(string){
  return string.toLowerCase()
}
 function logShout(string){
   console.log (string.toUpperCase())
 }

 function logWhisper(string){
   console.log(string.toLowerCase())
 }

 var lowercase = "i can't hear you"
 var uppercase = "YES INDEED!"
 var mixedcase = "I love you too"

 function sayHiToGrandma(string){

  if (string.toLowerCase()===string)
    return `I can't hear you!`
  if (string===string.toUpperCase())
    return `YES INDEED!`
  else
    return `I love you, too.`
  }
