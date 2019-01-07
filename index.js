 function shout (string){
   return string.toUpperCase ()
 }
 function whisper (string){
   return string.toLowerCase ()
 }
 function logShout(string){
   console.log(string.toUpperCase());
 }
 function logWhisper(string){
   console.log(string.toLowerCase());
 }
 
 function sayHiToGrandma (string) {
   var uppercase = "HELLO"
   var lowercase = "hello"
   var mixedcaase = "I love you, Grandma."
   //I can't hear you!
   //YES INDEED!
   //I love you, too.
 
   if (string.toUpperCase() === string) {
     return "YES INDEED!"
   }
     else if (string.toLowerCase() === string) {
       return "I can't hear you!"
     }
       else if (string === "I love you, Grandma.") {
         return "I love you, too."
       }
 }

