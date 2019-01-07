function shout(a){
  a = a.toUpperCase();
  return a;
}

function whisper(a){
  a = a.toLowerCase();
  return a;
}

function logShout(a){
  a = a.toUpperCase();
  console.log(a);
}

function logWhisper(a){
  a = a.toLowerCase();
  console.log(a);
}

function sayHiToGrandma(a){
  if(a === a.toLowerCase()){
    return "I can\'t hear you!";
  } else if(a === a.toUpperCase()){
    return "YES INDEED!";
  } else if(a === "I love you, Grandma."){
    return "I love you, too.";
  }
}

