learn
function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
  console.log(string.toUpperCase());
}

function logWhisper(string){
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string){
  var uppercase = "YES INDEED!";
  var mixcase = "I love you, Grandma.";
  
  if (string === mixcase){
    return "I love you, too.";
  } else if (string === string.toUpperCase()) {
    return "YES INDEED!";
   } else {
     return "I can't hear you!";
   }
  }
  
 