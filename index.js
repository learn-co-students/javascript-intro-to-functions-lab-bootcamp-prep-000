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

function isUpperCase(string){
  return string === string.toUpperCase();
}

function isLowerCase(string){
  return string === string.toLowerCase();
}

function sayHiToGrandma(string){
  if(isLowerCase(string)){
    return  "I can't hear you!" ;
  }else if(isUpperCase(string)){
    return "YES INDEED!";
  }else if(string ==="I love you, Grandma."){
    return "I love you, too.";
  }
  
}


