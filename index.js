function shout(a){
  return a.toUpperCase();
}
function whisper(a){
  return a.toLowerCase();
}
function logShout(a){
  console.log(a.toUpperCase());
}
function logWhisper(a){
  console.log(a.toLowerCase());
}
function sayHiToGrandma(a){
  if(a === a.toLowerCase()){
    return "I can't hear you!";
  } else if (a.toUpperCase() === a){
    return "YES INDEED!";
  } else if (a=== "I love you, Grandma."){
    return "I love you, too.";
  }
}