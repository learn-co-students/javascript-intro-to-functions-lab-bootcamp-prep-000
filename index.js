function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
  var loudWord = string.toUpperCase();
  console.log(loudWord);
}

function logWhisper(string){
  var quietWord = string.toLowerCase();
  console.log(quietWord);
}

function sayHiToGrandma(string){
  if(string === string.toUpperCase()){
    return "YES INDEED!";
  }
  else if(string === string.toLowerCase()){
    return "I can\'t hear you!";
  }
  else if(string === "I love you, Grandma."){
    return "I love you, too.";
  }
}
