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
  var sheSpeaketh;
  if (string === "I love you, Grandma."){
    sheSpeaketh = "I love you, too.";
  }
  else if (string === string.toUpperCase()){
    sheSpeaketh = "YES INDEED!";
  }
  else {
    sheSpeaketh = "I can\'t hear you!";
  }
  return sheSpeaketh;
}