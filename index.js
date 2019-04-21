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
  if(string===string.toLowerCase()){
    var returnStatement="I can't hear you!"
    return returnStatement;
  }else if(string===string.toUpperCase()){
    var state="YES INDEED!"
    return state;
  }else if(string==="I love you, Grandma."){
    return "I love you, too.";
  }
  
}