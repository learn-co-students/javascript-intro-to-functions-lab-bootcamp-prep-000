function shout(string) {
   return string.toUpperCase();
 }

 shout("hello!");
 
function logShout(string) {
   console.log(string.toUpperCase());
 }
 
 logShout("hello!");
 
 function whisper(string) {
   return string.toLowerCase();
 }
 
 whisper("HELLO!");
 
 function logWhisper(string) {
   console.log(string.toLowerCase());
 }
 
 logWhisper("HELLO!");
 
 var uppercase = "HELLO";
 var lowercase = 'hello';
 
 function sayHiToGrandma(string) {
   if(string == lowercase) {
     return "I can't hear you!";
   }
   if(string == uppercase) {
     return "YES INDEED!";
   }
   else {
     return "I love you, too.";
   }
 }
 
 sayHiToGrandma("hello!");
 sayHiToGrandma("HELLO!");
 sayHiToGrandma("I love you, Grandma.");
