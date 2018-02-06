function shout(string) {
  return string.toUpperCase("YES INDEED!");
}
function whisper(string) {
  return string.toLowerCase("I can't hear you!");
}
function logShout(string) {
  console.log(shout(string));
}
function logWhisper(string) {
  console.log(whisper(string));
}
function sayHiToGrandma(string){

if (string.toUpperCase() === string) {
  return("YES INDEED!");
}
 else if (string.toLowerCase() === string) { 
  return("I can't hear you!");
}
 else {
   return("I love you, too."); 
}
}