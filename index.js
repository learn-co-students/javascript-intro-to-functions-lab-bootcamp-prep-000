function shout(string){
  return string.toUpperCase();
}
function whisper(string){
  return string.toLowerCase();
}
function logShout(string){
  var upper=string.toUpperCase();
  console.log(upper);
}
function logWhisper(string){
  var lower=string.toLowerCase();
  console.log(lower);
}
function sayHiToGrandma(string){
  if (string.toLowerCase()===string){
    return "I can't hear you!"
  }else if (string.toUpperCase()===string){
    return "YES INDEED!"
  }else if (string==="I love you, Grandma."){
    return "I love you, too."
  }
}
