function shout(arg){
  return arg.toUpperCase();
}
function whisper(arg){
  return arg.toLowerCase();
}
function logShout(arg){
  console.log(arg.toUpperCase());
}
function logWhisper(arg){
  console.log(arg.toLowerCase());
}
function sayHiToGrandma(arg){
  var argtl = arg.toLowerCase();
  var argtu = arg.toUpperCase();
  if(arg === argtl){
    return "I can\'t hear you!";
  }
  else if(arg === "I love you, Grandma."){
    return "I love you, too."
  }
  else if(arg === argtu){
    return "YES INDEED!";
  }
}
