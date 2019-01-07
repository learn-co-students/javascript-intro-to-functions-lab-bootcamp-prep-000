function shout(string) {
  return string.toUpperCase();
}
function whisper(string){
  return string.toLowerCase();
}
function logShout(string){
  var a = string.toUpperCase();
  console.log(a);
}
function logWhisper(string){
  var a = string.toLowerCase();
  console.log(a);
}
function sayHiToGrandma(string){
  if(string.toLowerCase() === string){
    return "I can't hear you!"
  }
  else if(string.toUpperCase() === string) {
    return "YES INDEED!"
  }
  else if(string === "I love you, Grandma."){
    return "I love you, too."
  }
  else {
    return "Whatever"
  }
}