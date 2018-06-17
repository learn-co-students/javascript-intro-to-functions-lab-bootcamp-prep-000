function shout(string) {
  return string.toUpperCase();
}

let whisper = function(string) {
  return string.toLowerCase();
}

function logShout(string) {
 var uppercase = string.toUpperCase()
  string = uppercase;
  console.log(uppercase)
}

function logWhisper(string) {
 var lowercase = string.toLowerCase()
  string = lowercase
  console.log(lowercase);
}

function sayHiToGrandma(string) {
 if(string.toLowerCase() === string) {
   return "I can\'t hear you!"
 }else if(string.toUpperCase() === string) {
   return "YES INDEED!"
 }else {
   return "I love you, too."
 }
}

