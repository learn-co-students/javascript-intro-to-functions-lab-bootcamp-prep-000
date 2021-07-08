function shout(msg){
  return msg.toUpperCase();
}

function whisper(msg){
  return msg.toLowerCase();
}

function logShout(msg){
  console.log(shout(msg));
}

function logWhisper(msg){
  console.log(whisper(msg));
}

function sayHiToGrandma(msg){
  if (msg === "I love you, Grandma."){
    return "I love you, too.";
  }
  if (msg === msg.toLowerCase()){
    return "I can't hear you!";
  }else{
    return "YES INDEED!";
  }
}