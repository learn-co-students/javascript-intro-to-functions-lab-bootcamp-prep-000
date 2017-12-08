function shout(string){
  
  return string.toUpperCase();
}

function whisper(string){
  
  return string.toLowerCase();
  
}

function logShout(string){
  
  console.log(string.toUpperCase());
  
}

function logWhisper(String){

  console.log(String.toLowerCase());
  
}

function sayHiToGrandma(string){
  
  var lower = string.toLowerCase();
  var higher = string.toUpperCase();
  var love = "I love you, Grandma.";
  
  if(string === lower){
    return "I can't hear you!";
  } else if (string === higher){
    return "YES INDEED!"
  } else {
    return "I love you, too."
  }
  
}

