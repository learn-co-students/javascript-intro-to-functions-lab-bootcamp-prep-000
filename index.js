var string = "hello"
var shoutReply = "YES INDEED!"
var loveReply = "I love you, too."
var whisperReply = "I can't hear you!"
function shout(string){return string.toUpperCase() 
}
function whisper(string){return string.toLowerCase()
}
function logShout(string){
  console.log("HELLO");
  
}


function logWhisper(string){
  console.log("hello");
}


function sayHiToGrandma(string){
  if(string===string.toUpperCase()){
    return(shoutReply);
  }
  else if(string==="I love you, Grandma."){
    return(loveReply);
  }
  else {
    return(whisperReply);
  }
}
shout();
