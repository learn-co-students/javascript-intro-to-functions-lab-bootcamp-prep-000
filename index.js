function shout(string) {
return string.toUpperCase(0)
  }
function whisper(string) {
return string.toLowerCase(0)
}
function logShout(string){
  console.log(string.toUpperCase(0)) 
}
function logWhisper(string) {
  console.log(string.toLowerCase(0))
}
function sayHiToGrandma(string) {
 var lowercase = string.toLowerCase()
 var uppercase = string.toUpperCase()
 if (string === lowercase) {
return ("I can't hear you!")}
else if(string === uppercase) {
return ("YES INDEED!")}
else if ("I love you, Grandma."){return "I love you, too."}
}
