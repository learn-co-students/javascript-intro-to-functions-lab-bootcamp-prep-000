function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string){
  var upperString = string.toUpperCase()
  console.log(upperString);
}

function logWhisper(string) {
  var lowerString = string.toLowerCase()
  console.log(lowerString);
}




function sayHiToGrandma(string) {
  
 var toUpper = string.toUpperCase()
 var toLower = string.toLowerCase()
 var loveInput = "I love you, Grandma."
 
 if (string == toUpper) {
   return "YES INDEED!";
 } 
 
 if (string == toLower) {
   return "I can't hear you!";
 }
 
 if (string === loveInput) {
   return "I love you, too.";
}

}
