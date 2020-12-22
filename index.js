function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  const spy = ('HELLO');
  console.log(string.toUpperCase());
  
}

function logWhisper(string) {
  const spy = ('hello');
  console.log(string.toLowerCase());
  
}
  
 function sayHiToGrandma (string) {
  var lowerCase = "I can't hear you!";
  var upperCase = "YES INDEED!";
  var loveYou = "I love you, too.";

if (string.toLowerCase(string) === string){
  return lowerCase;
  
}
if (string.toUpperCase(string) === string){
  return upperCase;  
}
if ("I love you, Grandma." === string){
  return loveYou;
}
  }