function shout(shoutText){
  return shoutText.toUpperCase();
}
function whisper(whisperText){
  return whisperText.toLowerCase();
}


function logShout(loggedShout){
  console.log(loggedShout.toUpperCase());
}
function logWhisper(loggedWhisper){
  console.log(loggedWhisper.toLowerCase());
}

function sayHiToGrandma(input){
  if(input === input.toLowerCase()){
    return "I can't hear you!";
  }
  else if(input === input.toUpperCase()){
    return "YES INDEED!";
  }
  else if(input === "I love you, Grandma."){
    return "I love you, too.";
  }
}