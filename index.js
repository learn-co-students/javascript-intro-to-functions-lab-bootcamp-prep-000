function shout(string){
  return string.toUpperCase()
}
function whisper(string){
  return string.toLowerCase()
}
function logShout(string){
  console.log(string.toUpperCase ())
}
function logWhisper(string){
  console.log(string.toLowerCase())
}
function sayHiToGrandma(string){
  if(string.toUpperCase() === string) {
    return "YES INDEED!"
  } else if (string === "I love you, Grandma."){
    return "I love you, too."
  } else{
    return "I can't hear you!"
  }
}
/*function sayHiToGrandma(string){
  if (whisper("I can't hear you!")) {
     return "I can't hear you!";
  } else {
    return "YES INDEED!";
  }
}
var uppercase = "YES INDEED!"
var lowercase = "I can't hear you!"

function sayHiToGrandma(string){
if (lowercase){
  return "I " + whisper("can't hear you!")}
 else if (uppercase){
  return "YES INDEED!"
}
}
*/
