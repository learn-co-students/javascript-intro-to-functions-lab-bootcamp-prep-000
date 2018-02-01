function shout(string){
  return string.toUpperCase(); 
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
  var shoutString = string.toUpperCase(); 
  console.log(shoutString); 
}

function logWhisper(string){
  var whisperString = string.toLowerCase(); 
  console.log(whisperString); 
}

function sayHiToGrandma(string){
  
    if(string === string.toLowerCase()){
      return 'I can\'t hear you!'; 
    }
    else if(string === string.toUpperCase()){
      return 'YES INDEED!';
    }
  else {
    return 'I love you, too.';
  }
}