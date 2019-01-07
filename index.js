function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
  var upper = string.toUpperCase();
  console.log(upper);
}

function logWhisper(string){
  var upper = string.toLowerCase();
  console.log(upper);
}

function sayHiToGrandma(string){
  if(string === string.toLowerCase()){
    return "I can\'t hear you!";
  } else if (string === string.toUpperCase()){
    return "YES INDEED!";
  } else if (string === "I love you, Grandma."){
    return "I love you, too.";
  }
}
