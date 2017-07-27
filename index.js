function shout(string) {
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
  var result = "";

  if (string === string.toLowerCase()){
    result = "I can\'t hear you!"
  }else if (string === string.toUpperCase()){
    result = "YES INDEED!"
  }else if (string == "I love you, Grandma."){
    result = "I love you, too."
  }
  
  return result;
}
