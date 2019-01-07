function shout(string){
  return string.toUpperCase();
}
function whisper(string){
  return string.toLowerCase();
}
function logShout(string){
  console.log("HELLO")
}
function logWhisper(string){
  console.log("hello");
}
function sayHiToGrandma(string){
  
 var  uppercase = string.toUpperCase();
  var lowercase = string.toLowerCase();
  var Grandmather = "I love you, Grandma.";
  if(string == lowercase){
    return "I can't hear you!"
  }
  else if(string == uppercase){
    return "YES INDEED!"
    
  }
  else if(string == Grandmather){
    return "I love you, too."
  }
  
}
