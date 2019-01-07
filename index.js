var shout = function(string){
  return string.toUpperCase();
}


var whisper = function(string){
  return string.toLowerCase();
}

var logShout = function(string){
  console.log(string.toUpperCase());
}

var logWhisper = function(string){
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
   if (string.toLowerCase() === string) {
     return "I can\'t hear you!";
   } else if (string.toUpperCase() === string) {
     return "YES INDEED!";
   } else if (string === "I love you, Grandma.") {
     return "I love you, too.";
   }
 };
