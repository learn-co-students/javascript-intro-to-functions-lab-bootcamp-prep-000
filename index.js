function shout(message){
  return message.toUpperCase();
}

function whisper(message){
  return message.toLowerCase();
}

function logShout(message){
  console.log(shout(message));
}

function logWhisper(message){
  console.log(whisper(message));
}

function sayHiToGrandma(message){
  if(message === "I love you, Grandma."){
    return "I love you, too.";
  }
  if(message === shout(message)){
    return "YES INDEED!";
  }
  if(message === whisper(message)){
    return "I can't hear you!";
  }
}
