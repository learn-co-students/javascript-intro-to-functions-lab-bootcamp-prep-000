function shout(string){
  return string.toUpperCase();
}
function whisper(string){
  return string.toLowerCase();
} 
function logShout(string){
  console.log(string.toUpperCase());
}
function logWhisper(string){
  console.log(string.toLowerCase());
}
function sayHiToGrandma(string){
  if(string.toUpperCase() != string && string === string.toLowerCase()){
    console.log("I can't hear you!");
    return "I can't hear you!";
  }else if(string.toUpperCase() === string){
    console.log("YES INDEED!");
    return "YES INDEED!";
  }else if(string != string.toUpperCase() && string != string.toLowerCase()){
    console.log("I love you, too.");
    return "I love you, too."
  }
}