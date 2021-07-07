
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
  
  
  if(isUpperCase(string)){
    return "YES INDEED!";
  } else if(string == "I love you, Grandma."){
    //Wouldn't you have to shout this? Guess it doesn't matter.
    return "I love you, too.";
    
  }else {
    return "I can\'t hear you!";
  }
}

function isUpperCase(string){
  return string === string.toUpperCase();
}