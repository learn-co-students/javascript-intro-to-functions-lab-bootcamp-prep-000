function shout(str)  {
    return str.toUpperCase();
  }

function whisper(str)  {
    return str.toLowerCase();
  }

function logShout(str)  {
    console.log(str.toUpperCase());
  }

function logWhisper(str)  {
  console.log(str.toLowerCase());
}

function sayHiToGrandma(str) {
   var lowercase = str.toLowerCase();
   var uppercase = str.toUpperCase();
   var hiGrandma = "I love you, Grandma.";

   if (str === lowercase)
      return "I can't hear you!";
   else if (str === uppercase) {
      return "YES INDEED!";
   }
   else if (str === hiGrandma) {
     return "I love you, too."
   }
 }
