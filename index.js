function shout (string){
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
  
  var uppercase="YES INDEED!";
  var lowercase = "I can't hear you!";
  var iLoveYou = "I love you, Grandma.";
  
  if (string ===string.toUpperCase()){
    return uppercase;
  }
  
  else if (string ===string.toLowerCase()){
    return lowercase
  }
  else if(string ===iLoveYou){
    return "I love you, too.";
  }
  
}

