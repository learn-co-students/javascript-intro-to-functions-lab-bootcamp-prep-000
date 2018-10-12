//1. Task, shout, upperCase
function shout(string) {
  
  return string.toUpperCase();
  
}


//2. Task, whisper, lowerCase
function whisper(string) {
  
  return string.toLowerCase();
  
}


//3. Task, logShout
function logShout(string) {
  
  console.log(string.toUpperCase());
  
}


//4. Task, logWhisper
function logWhisper(string) {
  
  console.log(string.toLowerCase());
  
}


//5, 6, 7. Task, sayHiToGrandma(string)
function sayHiToGrandma(string) {
  
  if( string === string.toLowerCase() ) {
    
    return "I can't hear you!";
    
  } else if (string === string.toUpperCase()) {
    
    return "YES INDEED!"
    
  } else if (string === "I love you, Grandma.") {
    
    return "I love you, too.";
    
  }
  
}