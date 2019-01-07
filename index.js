function shout(aStr){
  return aStr.toUpperCase();
}
function whisper(aStr){
  return aStr.toLowerCase();
}
function logShout(aStr){
  console.log(aStr.toUpperCase());
}
function logWhisper(aStr){
  console.log(aStr.toLowerCase());
}
function sayHiToGrandma(aStr){
  if(aStr.toUpperCase() === aStr){
    return "YES INDEED!"
  }
  if(aStr.toLowerCase() === aStr){
    return "I can't hear you!"
  }
  if(aStr === "I love you, Grandma."){
    return "I love you, too."
  }
}
