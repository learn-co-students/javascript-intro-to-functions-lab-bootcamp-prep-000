//upperCase
function shout(string) {
  return string.toUpperCase();
}
//lowerCase
function whisper(string) {
return string.toLowerCase();
}
//console.log shout
function logShout(string) {
console.log(string.toUpperCase());
}
logShout('hello');
//console.log whisper
function logWhisper(string) {
  console.log(string.toLowerCase());
}
logWhisper('HELLO');
//greet grandmother
function sayHiToGrandma(string) {
if (string.toLowerCase() === string){
return "I can't hear you!" ;
 } else if (string.toUpperCase() === string) {
   return "YES INDEED!" ;
 } else if (string === "I love you, Grandma."){
  return "I love you, too." ;
  }
}
