function shout(string){
  return string.toUpperCase()
}
function whisper(string){
  return string.toLowerCase()
}
function logShout(string){
  console.log(string.toUpperCase())
}
function logWhisper(string){
  console.log(string.toLowerCase())
}
function sayHiToGrandma(string){
  switch (string){
    case (`hello`):
      return ("I can't hear you!");
      break;
    case (`HELLO`):
      return ("YES INDEED!");
      break;
    default:
      return ("I love you, too.");
  }
}
